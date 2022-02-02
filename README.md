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
You can change the following values :
* URL: the url targeted by the calls
* EMAIL: the email tested with the differents passwords

## Advanced configuration
In the Index.js file
### Configure authorized chars
```
$ wordGenerator.configurePlage()
$ wordGenerator.configurePlage(num, upper, lower, special, unauthorized)
```
Parameters (All optional):
* num: Activate numercis chars // default : true, 
* upper: Activate uppercase chars  // default : true, 
* lower: Activate lowercase chars // default : true, 
* special: Activate special chars // default : true
* unauthorized: List of unauthorized chars // default : []

### Configure the word
```
$ bruteForce()
$ bruteForce(min, max, startWord)
```
Parameters (All optional):
* min: Minimum word length // default : 1, 
* max: Maximum word length // default : 20 , 
* startWord: Word the bruteforce begins with // default : ""

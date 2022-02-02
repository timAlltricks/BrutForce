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
```
Parameters:
* num: Activate numercis chars, 
* upper: Activate uppercase chars , 
* lower: Activate lowercase chars , 
* special: Activate special chars
* unauthorized: List of unauthorized chars

### Configure the word
```
$ bruteForce()
```
Parameters:
* min: Minimum word length , 
* max: Maximum word length , 
* startWord: Word the bruteforce begins with

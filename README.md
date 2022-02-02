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
```
- // without params
$ wordGenerator.configurePlage()
-
- // with params
$ wordGenerator.configurePlage(num, upper, lower, special, unauthorized)
```
Parameters (All optional):
* Boolean **num**: Activate numercis chars // default : true, 
* Boolean **upper**: Activate uppercase chars  // default : true, 
* Boolean **lower**: Activate lowercase chars // default : true, 
* Boolean **special**: Activate special chars // default : true
* Boolean **unauthorized**: List of unauthorized chars // default : []

### Configure the word
```
- // without params
$ bruteForce.start()
-
- // with params
$ bruteForce.start(min, max, startWord)
```
Parameters (All optional):
* Integer **min**: Minimum word length // default : 1, 
* Integer **max** : Maximum word length // default : 20 , 
* String **startWord**: Word the bruteforce begins with // default : ""

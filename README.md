# BrutForce
This project is a brutForce generator, 
using Pupeteer Package
To test the generated word on a input.

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
Function : wordGenerator.configurePlage()
Parameters:
* num: Activer les caractères numérique , 
* upper: Activer les caractères en majuscule , 
* lower: Activer les caractères en minuscule , 
* special: Activer les caractères spéciaux 
* unauthorized: Liste de caractères à retirer

### Configure the word
Function : bruteForce()
Parameters:
* min: Activer les caractères numérique , 
* max: Activer les caractères en majuscule , 
* lower: Activer les caractères en minuscule 

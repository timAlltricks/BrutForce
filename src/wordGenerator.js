var plage = [];

module.exports = {
  plage: plage,
  configurePlage: configurePlage,
  getNextWord: getNextWord,
};

// Ajouter un intervalle de caractères autorisées
function addIntervalToPlage(start, end) { for(i=start; i <= end; i++) plage.push(String.fromCharCode(i)); }

// Configurer la plage de caractères autorisés
function configurePlage(num = true, upper = true, lower = true, special = true, unauthorized = []){
  if(num) addIntervalToPlage(48, 57);
  if(upper) addIntervalToPlage(65, 90);
  if(lower) addIntervalToPlage(97, 122);
  if(special) {
    addIntervalToPlage(33, 47);
    addIntervalToPlage(58, 64);
    addIntervalToPlage(91, 96);
    addIntervalToPlage(123, 126);
  }

  unauthorized.forEach(char => {
    if(plage.includes(char)) plage.pop(char);
  });
}

// Génerer le prochain mot à partir de la plage de caractères autorisés
function getNextWord(word){
  for(i=word.length - 1; i >= 0; i--) {
    nextCharIndex = ( plage.indexOf(word.charAt(i)) + 1 === plage.length ) ? 0 : plage.indexOf(word.charAt(i)) + 1;
    word = word.replaceAt(i, plage[nextCharIndex]);

    if(nextCharIndex!=0) return word;
    if(i===0) return word + plage[0]
  }
  return word
}

String.prototype.replaceAt = function(index, replacement) {
  return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}
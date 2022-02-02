const bruteForce = require('./src/bruteForce');
const wordGenerator = require('./src/wordGenerator');

(async () => {
  wordGenerator.configurePlage(false, false, true, false, ["[", "\\", "]", "^", "_"]);
  await bruteForce(3, 8);
})();

// "`", "{", "|", "}", "~" ne sont pas reconnu comme identique même en comparant les charcode... wtf
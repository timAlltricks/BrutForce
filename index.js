const bruteForce = require('./bruteForce');
const wordGenerator = require('./wordGenerator');

(async () => {
  wordGenerator.configurePlage(false, false, true, false, ["[", "\\", "]", "^", "_"]); // "`", "{", "|", "}", "~" ne sont pas reconnu comme identique même en comparant les charcode... wtf
  await bruteForce(3, 8);
})();
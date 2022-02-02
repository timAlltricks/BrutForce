const bruteForce = require('./src/bruteForce');
const wordGenerator = require('./src/wordGenerator');

(async () => {
  wordGenerator.configurePlage(false, false, true, true, ["[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]);
  await bruteForce.start(3, 8, "tesa");
})();
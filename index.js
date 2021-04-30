const text =
  "Lorem, ipsum dolor sit amet, consectetur adipisicing elit, \
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi \
  ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit \
  in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
  Excepteur sint occaecat cupidatat non proident, \
  sunt in culpa qui officia deserunt mollit anim id est laborum.";

function censor(text, replacement, toCensor) {
  let wordsCensored = 0;
  let censored = []
  text = text.split(" ")
  for (word of text) {
    if (word === toCensor) {
      censored.push(replacement.repeat(toCensor.length))
      wordsCensored++
    } else {
      censored.push(word)
    }
  }
  censored = censored.join(" ")
  console.log(censored)
  console.log(wordsCensored)
  return text, wordsCensored
}

censor(text, "!", "in")



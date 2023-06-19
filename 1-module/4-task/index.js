function checkSpam(str) {
  let spamTextFirst = '1xBet'.toLowerCase(),
    spamTextSecond = 'XXX'.toLowerCase(),
    newStr = str.toLowerCase();

  if (newStr.includes(spamTextFirst) || newStr.includes(spamTextSecond)) {
    return true;
  } else return false;
}

function ucFirst(str) {
  if (str === '') {
    return '';
  } else {
    let newStr = str[0].toUpperCase() + str.slice(1, str.length);
    return newStr;
  }
}

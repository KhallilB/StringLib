/* eslint-disable func-names */
/* eslint-disable no-extend-native */
// Capatalize the first letter
String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

// Capitalizes all the letters
String.prototype.allCaps = function () {
  return this.toUpperCase();
};

// Capitalizes the every first letter
String.prototype.capitalizeWords = function () {
  const string = this.split(' ');

  for (let i = 0, x = string.length; i < x; i++) {
    string[i] = string[i][0].toUpperCase() + string[i].substr(1);
  }

  return string.join(' ');
};

// Capitalize every other letter
String.prototype.oddCaps = function () {
  let returnString = '';
  for (let i = 0; i < this.length; i++) {
    if (i % 2 != 0) {
      returnString += this[i].toUpperCase();
    } else {
      returnString += this[i].toLowerCase();
    }
  }
  return returnString;
};

// Removes all trailing and leading whitespaces
String.prototype.removeExtraSpaces = function () {
  const regex = /(^\s+|\s+$)/;
  const newString = this.replace(regex, '');
  return newString;
};

// Removes extra spaces and replaces spaces with the dash
String.prototype.kebobCase = function () {
  const regex = /\s+/;
  const newString = this.replace(regex, '-').toLowerCase();
  return newString;
};

// Return string in snake case format
String.prototype.snakeCase = function () {
  const firstRegex = /[^\w\s]/;
  const secondRegex = /\s+/;
  let newString = this.replace(firstRegex, '');
  newString = newString.replace(secondRegex, ' ');
  return newString
    .toLowerCase()
    .split(' ')
    .join('_');
};

// Return string in camel case format
String.prototype.camelCase = function () {
  return this.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => (index == 0 ? word.toLowerCase() : word.toUpperCase())).replace(/\s+/g, '');
};

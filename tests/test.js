require('../index');

test('capitalization of word', () => {
  expect('nugget'.capitalize()).toBe('Nugget');
});

test('capitalizes all the letters', () => {
  expect('very'.allCaps()).toBe('VERY');
});

test('capitalizes every word in sentance', () => {
  expect('very good very nice'.capitalizeWords()).toBe('Very Good Very Nice');
});

test('capitalize every other letter', () => {
  expect('chicken'.oddCaps()).toBe('cHiCkEn');
});

test('remove all trailing and leading whitespaces', () => {
  expect('   this sentance'.removeExtraSpaces()).toBe('this sentance');
});

test('removes extra spaces and replaces spaces with the dash', () => {
  expect('tasty kebob'.kebobCase()).toBe('tasty-kebob');
});

test('return string in snake case format', () => {
  expect('Chicken nugget'.snakeCase()).toBe('chicken_nugget');
});

test('return string in camel case format', () => {
  expect('billy bounce'.camelCase()).toBe('billyBounce');
});

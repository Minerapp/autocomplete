var Autocomplete = require('./')

var autocomplete = new Autocomplete([
  'aaa',
  'aba',
  'abc',
  'abd',
  'aca',
  'ada',
  'adb',
  'acb',
  'baa',
  'bab',
  'bac',
  'bad',
  'bba',
  'bca',
  'bdc',
  'bda',
  'bdb'
]);


console.log(autocomplete.search('a'))
console.log(autocomplete.search('ab'))
console.log(autocomplete.search('abc'))
console.log(autocomplete.search('b'))
console.log(autocomplete.search('ba'))
console.log(autocomplete.search('bac'))
console.log(autocomplete.search('bad'))

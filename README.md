# autocomplete-trie



```bash

npm install autocomplete-trie

```

```javascript
var Autocomplete = require('autocomplete')

var autocomplete = new AutoComplete.initialize([
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

```



Thanks to marc.e.campbell@gmail.com
for his original work on the node-autocomplete package.

This package is set to a fork of the original with new code to be shipped and general improvements needed for Minerlabs to utilize the code.

Among first changes are less module cruft, and improved api.

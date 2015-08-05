var Trie = require('./trie').Trie;

exports = module.exports = Autocomplete;
exports.version = '1.0.0';


exports.connectAutocomplete = function(getInitialElements) {
  Autocomplete.singleton  = new Autocomplete();

  return Autocomplete.singleton;
};

function Autocomplete(data) {
  
  this.trie = new Trie();
  if (data) return this.initialize(data);
}

Autocomplete.prototype.initialize = function(elements) {
  var self = this;
  
  elements.forEach(function(element) {
    self.addElement(element);
  });
  return this;
};

Autocomplete.prototype.addElement = function(element) {
  this.trie.addValue(element);
};


Autocomplete.prototype.removeElement = function(element) {
  this.trie.removeValue(element);
};

Autocomplete.prototype.search = function(prefix) {
  // I added .toLowerCase for our specific impl; 
  // should probably make this a flag
  return this.trie.autoComplete(prefix.toLowerCase());
};

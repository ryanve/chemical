!function(root, name) {
  var common = typeof module != 'undefined' && !!module.exports
  var aok = common ? require('aok') : root.aok
  var api = common ? require('../src') : root[name]
  aok('instance', api() instanceof api)
}(this, 'chemical');
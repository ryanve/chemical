!function(root, name) {
  var common = typeof module != 'undefined' && !!module.exports
  var aok = common ? require('aok') : root.aok
  var chemical = common ? require('../src') : root[name]

  aok('instance', chemical() instanceof chemical)
  aok('chemical(formula)', 'C' === chemical('C').formula)
  aok('chemical(properties)', 'C' === chemical({
    formula: 'C'
  }).formula)
}(this, 'chemical');
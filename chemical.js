/*!
 * chemical 0.1.0+201405040426
 * https://github.com/ryanve/chemical
 * MIT License (c) 2014 Ryan Van Etten
 */
!function(root, name, make) {
  if (typeof module != 'undefined' && module.exports) module.exports = make()
  else root[name] = make()
}(this, 'chemical', function() {

  // sync the prototypes
  chemical.prototype = Chemical.prototype
  
  /**
   * @param {(string|Object)=} formula or properties
   * @return {Chemical}
   */
  function chemical(formula) {
    return new Chemical(formula)
  }
  
  /**
   * @constructor
   * @param {(string|Object)=} formula or properties
   */
  function Chemical(formula) {
    if (typeof formula == 'string') this.formula = formula
    else for (var k in formula) this[k] = formula[k]
  }

  return chemical
});
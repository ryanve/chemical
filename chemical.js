/*!
 * chemical 0.0.0+201404292358
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
   * @param {Object=} properties
   * @return {Chemical}
   */
  function chemical(properties) {
    return new Chemical(properties)
  }
  
  /**
   * @constructor
   * @param {Object=} properties
   */
  function Chemical(properties) {
    for (var k in properties) this[k] = properties[k]
  }

  return chemical
});
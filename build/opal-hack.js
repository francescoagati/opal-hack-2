// file app.rb
(function() {
var __opal = Opal, self = __opal.top, __scope = __opal, nil = __opal.nil, def = self._klass.prototype, __breaker = __opal.breaker, __slice = __opal.slice;
var x = nil, __a, __b;
  def.$log = function(s) {
    
    console.log(s);
  };
  x = [1, 2, 3, 4, 5];
  return (__b = x, __b.$each._p = (__a = function(n) {

    
    if (n == null) n = nil;

    return this.$log(n)
  }, __a._s = self, __a), __b.$each());
})();

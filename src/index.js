
exports.min = function min (array) {
  return (_arraynotempty(array)) ? Math.min.apply(null, array) : 0;
}

exports.max = function max (array) {
  if (_arraynotempty(array)) {
    return Math.max.apply(null, array);
  }
  return 0;
}

exports.avg = function avg (array) {
  if (_arraynotempty(array)) {
    return (array.reduce(function(a, b) {
      return a+b}))/array.length;
  }
  return 0;
}

function _arraynotempty(array){
  if (! Array.isArray(array)) {
    return false;
  }
  else if (array.length) {
    return true
  }
  return false;
}
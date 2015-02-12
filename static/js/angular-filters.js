'use strict';
 
angular.module('yt', [])
 
.filter('substring', function() {
  return function(str, start, end) {
    return str.substring(start, end);
  };
})
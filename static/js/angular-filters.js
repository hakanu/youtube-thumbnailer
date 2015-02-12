angular.module('yt', []).filter('truncate', function() {
  return function(input) {
    console.log('input: ' + input);
    if (input) {
      var startIndex = input.indexOf("v=") + 2;
      return input.substring(startIndex, input.length);
    }
    // Miranda: https://www.youtube.com/watch?v=svOElhHUb38
    return input ? 'hop' : 'svOElhHUb38';
  };
});
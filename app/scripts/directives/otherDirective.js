'use strict';

angular.module('ga-lib')
  .directive('otherDirective', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element) {
        element.text('this is the otherDirective directive');
      }
    };
  });

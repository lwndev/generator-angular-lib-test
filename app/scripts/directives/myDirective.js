'use strict';

angular.module('ga-lib')
  .directive('myDirective', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element) {
        element.text('this is the myDirective directive');
      }
    };
  });

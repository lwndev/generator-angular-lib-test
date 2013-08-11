'use strict';

angular.module('ga-lib', []);

'use strict';

angular.module('ga-lib')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

'use strict';

angular.module('ga-lib')
  .controller('MyCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

'use strict';

angular.module('ga-lib')
  .controller('OtherCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

'use strict';

angular.module('ga-lib')
  .service('myService', function myService() {
    // AngularJS will instantiate a singleton by calling "new" on this function
});

'use strict';

angular.module('ga-lib')
  .service('otherService', function otherService() {
    // AngularJS will instantiate a singleton by calling "new" on this function
});

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

"use strict";

angular.module('myApp', []);

//Elements, Attributes or Decorations (IE does not play well with Elements)
angular.module('myApp').directive('myDirective', function() {
    return {
        template: 'Hello from AngularJS directive',
        restrict: 'AEC' //Attribute Element Class
    };
});

angular.module('myApp').controller('MainController', [function() {
    
}]);
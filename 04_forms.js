"use strict";

angular.module('myApp', []);

angular.module('myApp').controller('MainController', [function() {
    
    this.fruitList = ['banana', 'apple', 'whatever', 'cherries'];

    this.user = {
        name: 'John Smith',
        favouriteFruit: 'cherries',
        isActive:true
    };

}]);

angular.module('myApp').filter('yesorno', function() {

    return function(value) {
        if (value === true) {
            return 'yes';
        } else if (value === false ) {
            return 'no';
        } else {
            return 'unknown';
        }
    };

});

angular.module('myApp').controller('FormValidationController', [function() {
    
    this.user = {
    };

    this.submitForm = function(form) {
        
        if (form.$valid) {
            window.alert('Passed');
        } else {
            window.alert('Failed');
        }
    };

}]);
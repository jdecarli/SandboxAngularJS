"use strict";

angular.module('myApp', []);

angular.module('myApp').controller('ParentController', [function(){

    this.message = 'Hello from parent';
    
}]);

angular.module('myApp').controller('FirstChild', [function() {    
    
    this.message = 'Hello from first child';

}]);

angular.module('myApp').controller('SecondChild', ['$interval', '$scope', function($interval, $scope) {    
    
    this.message = 'Hello from second child';

    this.value = 1; //this value will have a different name

    $interval(function(){
        this.value = Math.round(Math.random() * 10000) + 1;
    }.bind(this), 2000);

    //now calling this.value as second.value (controller as a syntax)
    $scope.$watch('second.value', function(newValue, oldValue) {
        console.log('New: ', newValue, ' Old: ', oldValue);
    });
}]);
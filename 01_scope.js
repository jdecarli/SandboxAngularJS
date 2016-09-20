"use strict";

//check this 
//using tsd https://johnpapa.net/intellisense-witha-visual-studio-code/
//using tsd http://stackoverflow.com/questions/29975036/how-to-import-intellisense-files-into-vscode-visual-studio-code
//moving to typings (jan 2016) https://github.com/DefinitelyTyped/tsd/issues/269

angular.module('myApp', []);

angular.module('myApp').controller('ParentController', ['$scope', function ($scope) {
    
    $scope.model = {
        name: 'John Smith'
    };

}]);

angular.module('myApp').controller('ChildController', ['$scope', function ($scope) {
}]);
"use strict";

angular.module('myApp', []);

angular.module('myApp').controller('MainController', [function() {
    
    //ngModel
    //---------------------------------------------
    this.user = {
        firstName:'',
        lastName:'',
        email:'',
        optIn:false,
        selectedColor:'white'
    };

    this.colors = [
        {name: 'White', value:'white'},
        {name: 'Red', value:'red'},
        {name: 'Blue', value:'blue'},
        {name: 'Green', value:'green'}
    ];

    //ngFocus and ngBlur
    //---------------------------------------------
    this.message = '';

    this.sayHello = function() {
        this.message = 'Hello, please enter your name';
    };

    this.sayGoodBye = function() {
        if (!this.user.firstName || this.user.firstName.lenght == 0) {
            this.message = 'Name is empty';
        } else {
            this.message = 'Thanks for entering your name, ' + this.user.firstName + ' ' + this.user.lastName;
        }
    };

}]);
"use strict";

angular.module('myApp', []);

angular.module('myApp').controller('MainController', [function() {
    
    //ngStyles
    //---------------------------------------------
    // this.style1 = {
    //     color: 'red',
    //     fontSize: '16px'
    // };

    // this.style2 = {
    //     color: 'blue',
    //     fontSize: '10px'
    // };

    this.enableStyles = function() {
        this.style1 = {
            color: 'red',
            fontSize: '16px'
        };

        this.style2 = {
            color: 'blue',
            fontSize: '10px'
        };        
    };

    this.disableStyles = function() {
        this.style1 = null;
        this.style2 = null;
    };

    //ngClass
    //---------------------------------------------
    this.class1 = 'redClass';
    this.class2 = 'greenClass';
    this.isSelected = false;

    //ngClass Even and Odd
    this.foodList = [
        {name:'Apples', price:.99},
        {name:'Beans', price:1.99},
        {name:'Bread', price:1.99},
        {name:'Carrots', price:2.99},
        {name:'Cereal', price:5.12},
        {name:'Eggs', price:3.49},
    ];
}]);
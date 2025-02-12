
var app = angular.module('ecommerceApp', ['authmodule', 'catalogmodule', 'ngRoute']); 

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {  
            templateUrl: 'views/login.html',
            controller: 'LoginController'
        })
        .when('/products', {  
            templateUrl: 'views/products.html',
            controller: 'ProductController'
        })
        .otherwise({
            redirectTo: '/'  
        });
});

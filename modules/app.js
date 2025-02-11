import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import ngResource from 'angular-resource';

const app = angular.module('ecommerceApp', [uiRouter, ngResource]);

app.config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            template: '<h1>Welcome to the E-commerce Website</h1>'
        })
        .state('products', {
            url: '/products',
            template: '<h1>Products List</h1>'
        });
});

export default app;
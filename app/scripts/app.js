'use strict';

/**
 * @ngdoc overview
 * @name client2App
 * @description
 * # client2App
 *
 * Main module of the application.
 */
angular
  .module('client2App', [
    'ngResource',
    'ngRoute',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/admin/orders', {
        templateUrl: 'views/admin/orders.html',
        controller: 'OrdersCtrl',
        resolve: {
          orders: ['Order', function(Order) {
            return Order.index();
          }]
        }
      })
      .when('/order', {
        templateUrl: 'views/order.html',
        controller: 'OrderCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  });

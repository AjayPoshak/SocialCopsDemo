"use strict";
angular.module('socialCopsDemo', ['ngRoute']);
angular.module('socialCopsDemo')
  .config(['$routeProvider', function($routeProvider){
    console.log("Inside the router");
    $routeProvider
      .when('/',{
        templateUrl: 'view/debut.html',
        controller: 'debutController'
      })
      .when('/playedBigTeams', {
        templateUrl: 'view/playedBigTeams.html',
        controller: 'playedBigTeamsController'
      })
      .when('/battingStats', {
        templateUrl: 'view/battingStats.html',
        controller: 'battingStatsController'
      })
      .when('/teamPerformance', {
        templateUrl: 'view/teamPerformance.html',
        controller: 'teamPerformanceController'
      })
      .when('/masterBlaster', {
        templateUrl: 'view/masterBlaster.html',
        controller: 'masterBlasterController'
      })
      .otherwise ({
        redirectTo: '/'
      });
  }]);

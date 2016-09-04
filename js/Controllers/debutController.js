"use strict";
angular.module('socialCopsDemo')
  .controller('debutController', debutController);


  function debutController($scope, $location){
    console.log("Inside debutController");
    $scope.previousPage = function(){
      console.log("For previous page...");
    };
    $scope.nextPage = function(){
      console.log("For Next Page...");
      $location.path('/playedBigTeams');
    }
  };

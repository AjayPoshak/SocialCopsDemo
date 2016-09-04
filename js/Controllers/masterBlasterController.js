"use strict";
angular.module('socialCopsDemo')
  .controller('masterBlasterController', masterBlasterController);

  function masterBlasterController($scope, $location){
    console.log("Inside masterBlasterController...");
    $scope.previousPage = function() {
        $location.path('/teamPerformance');
    };
  }

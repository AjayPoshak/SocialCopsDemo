"use strict";
angular.module('socialCopsDemo')
  .controller('globalController', globalController);

  function globalController($rootScope){
    /**
     * This function checks if a number is NaN or not.
     *  NaN is a special type in JS which is not equal to itself.
     * @param  {string} param String to be checked for NaN
     * @return {Boolean}  true, if NaN; false, if not NaN
     */
    $rootScope.ifNaN = function(param){
      if(parseInt(param) === parseInt(param)){
        return false;
      }
      else {
        return true;
      }
    };
  };

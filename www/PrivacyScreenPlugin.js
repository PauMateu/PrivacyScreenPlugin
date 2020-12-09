/*global cordova, module*/
(function(module){
  function PreventScreenshots(){
      var core = {};
      var isEnabled = true;

      var callFunctionIfExists = function(fn,params){
          if(typeof(fn) !== "function"){
              return false;
          }

          fn.call();
          return true;
      };

      core.enable = function(success,error){
          cordova.exec(function(data){
              isEnabled = true;
              callFunctionIfExists(success);
          }, function(err){
              callFunctionIfExists(error);
          }, "PrivacyScreenPlugin", "enable", []);
      };

      core.disable = function(success,error){
          cordova.exec(function(data){
              isEnabled = false;
              callFunctionIfExists(success);
          }, function(err){
              callFunctionIfExists(error);
          }, "PrivacyScreenPlugin", "disable", []);
      };

      core.isEnabled = function(){
          return isEnabled;
      };

      return core;
  }

  module.exports = new PreventScreenshots();
})(module);
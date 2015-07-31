var app = angular.module('page', []);
app.controller('TabController', function(){
    this.tab = 1;

    this.setTab = function(x){
      this.tab = x;
    };

    this.isSet = function(x){
      return this.tab === x;
    };
  });
angular.module('ContactCtrl', ['ngMaps'])
.controller('ContactController', function($scope) {

      $scope.map={
       center: [52.2166667, 6.9],
       zoom: 10

    }
    $scope.marker = {
        position: [52.2166667, 6.9],
      
      events:{
          click: function(){
             changeMarkerPos(); 
          }
      } 
      }
    function changeMarkerPos(){
     $scope.marker ={
        position :[15.3173,75.7139]
    }
    }	

});
angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope) {
  })

  .controller('ChatsCtrl', function ($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
      Chats.remove(chat);
    };
  })

  .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })


  .controller('ERechnerCtrl', function ($scope, $stateParams) {
    $scope.model = {};
    $scope.berechnen = function () {

      var from = document.getElementById("from");
      var strFrom = from.options[from.selectedIndex].text;

      var to = document.getElementById("to");
      var strTo = to.options[to.selectedIndex].text;

      if ((strFrom == 'Kilometer') && (strTo == 'Mile')) {
        $scope.model.ausgabe = $scope.model.eingabe * 0.621371;
      }

      else if
        ((strFrom == 'Kilometer') && (strTo == 'Foot')) {
        $scope.model.ausgabe = $scope.model.eingabe * 3280.84;
      }

      else if
      ((strFrom == 'Kilometer') && (strTo == 'Inch')) {
        $scope.model.ausgabe = $scope.model.eingabe * 39370.1;
      }

      else if
      ((strFrom == 'Meter') && (strTo == 'Mile')) {
        $scope.model.ausgabe = $scope.model.eingabe * 0.000621371;
      }

      else if
      ((strFrom == 'Meter') && (strTo == 'Foot')) {
        $scope.model.ausgabe = $scope.model.eingabe * 3.28084;
      }

      else if
      ((strFrom == 'Meter') && (strTo == 'Inch')) {
        $scope.model.ausgabe = $scope.model.eingabe * 39.3701;
      }
      else if
      ((strFrom == 'Centimeter') && (strTo == 'Mile')) {
        $scope.model.ausgabe = $scope.model.eingabe * 0.0000062137;
      }

      else if
      ((strFrom == 'Centimeter') && (strTo == 'Foot')) {
        $scope.model.ausgabe = $scope.model.eingabe * 0.0328084;
      }

      else if
      ((strFrom == 'Centimeter') && (strTo == 'Inch')) {
        $scope.model.ausgabe = $scope.model.eingabe * 0.393701;
      }


    };
  })

  .controller('AccountCtrl', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  })

  .controller('TutsCtrl', function ($scope) {
  })
;

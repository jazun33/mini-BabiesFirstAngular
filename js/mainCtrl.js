var app = angular.module('friendsList');
app.controller('mainCtrl', function($scope){

    $scope.friends = ['Jason', 'Simi', 'Tyler'];

    $scope.addFriend = function(friend) {
        $scope.friends.push(friend);
    }

});
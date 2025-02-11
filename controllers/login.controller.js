var app =angular.module('ecommerceApp', [])
  .controller('logincontroller', ['$scope', function($scope) {
    $scope.user = {
      username: '',
      password: ''
    };

    $scope.login = function() {
      // Simple login logic (replace with actual authentication logic)
      if ($scope.user.username === 'admin' && $scope.user.password === 'password') {
        alert('Login successful!');
      } else {
        alert('Invalid username or password.');
      }
    };
  }]);
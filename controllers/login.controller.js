
catalogmodule.controller('LoginController', function($scope, $location) {
  $scope.user = { username: '', password: '' }; 
  $scope.errorMessage = ''; 

  $scope.login = function() {
      console.log('User:', $scope.user); 

      var validUsername = 'admin';
      var validPassword = 'password123';


      if ($scope.user.username === validUsername && $scope.user.password === validPassword) {
          $scope.errorMessage = ''; 
          console.log('Login successful, redirecting to products...');
         
          $location.path('/products');
      } else {
          $scope.errorMessage = 'Invalid username or password!'; 
      }
  };
});

angular.module('quoteApp16-06-02').controller('mainCtrl', function($scope, dataService) {

  // $scope.test = "Hello World!"
  $scope.quoteArr = dataService.getData();
  // $scope.newObj = {};

  $scope.addQuote = function() {
    // $scope.newObj = {};
    // $scope.newObj.text = $scope.newQuote;
    // $scope.newObj.author = ($scope.newAuthor) ? $scope.newAuthor: 'Anonymous';
    // $scope.quoteArr.unshift($scope.newObj);
    // console.debug($scope.quoteArr);
    return dataService.expObj($scope.newQuote, $scope.newAuthor);
  };

});

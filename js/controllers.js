var studentControllers = angular.module('studentControllers', []);

studentControllers.controller('ListController', ['$scope', '$http', function($scope, $http){
	$http.get('js/data.json').success(function(data){
		$scope.students = data;
		$scope.studentOrder = 'name';
	});
}]);

studentControllers.controller('DetailsController', ['$scope', '$http', '$routeParams',  function($scope, $http, $routeParams){
	$http.get('js/data.json').success(function(data){
		$scope.students = data;
		$scope.whichItem = $routeParams.itemId;
	});
}]);
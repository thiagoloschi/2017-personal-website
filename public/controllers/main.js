var site = angular.module('site');

site.controller('mainController', function($scope, $http){
    console.log('Controller running...');
    $scope.showModal = false;

    $http.get('/public/files/projects.json').then(function (response) {
        $scope.projects = response.data;
    }).catch(function (response) {
        console.log(response.data);
    });

    $scope.click = function(data) {
        console.log(data)
        $scope.selected = data;
        console.log($scope.selected.pictures)
        $scope.description = data.description;
        $scope.technologies = data.technologies;
        $scope.site = data.site;
        $scope.github = data.git;
        $scope.pictures = data.pictures;   
        $scope.teste = 'main.png';     
    }
});
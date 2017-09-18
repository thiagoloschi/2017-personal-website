var site = angular.module('site');

site.controller('mainController', function($scope, $http){
    console.log('Controller running...');
    $scope.showModal = false;

    $http.get('/public/files/projects.json').then(function (response) {
        $scope.projects = response.data;
    }).catch(function (response) {
    });

    $scope.click = function (data) {
        $scope.selected = data; 
        appendPictures(data.pictures);
    }

    $scope.reset = function (data) {
        resetCarousel();
    }

    function appendPictures (pictures) {
        for(var i=0 ; i< pictures.length ; i++) {
            $('<div class="item"><img src="'+pictures[i]+'"><div class="carousel-caption"></div></div>').appendTo('.carousel-inner');
            $('<li class="indicators" ata-target="#myCarousel" data-slide-to="'+i+'"></li>').appendTo('.carousel-indicators')
        }
        $('.item').first().addClass('active');
        $('.carousel-indicators > li').first().addClass('active');
    }

    function resetCarousel () {
        $('.item').remove();
        $('.indicators').remove();
    }
});
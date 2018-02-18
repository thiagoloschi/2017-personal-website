var site = angular.module('site');

site.controller('mainController', function($scope, $http){
    $scope.showModal = false;

    $http.get('/public/files/projects.json').then(function (response) {
        $scope.projects = response.data;
    }).catch(function (response) {
    });

    $scope.click = function (data) {
        resetCarousel();
        loadCarousel();
        $scope.selected = data;
        appendPictures(data.pictures);
    }

    $scope.reset = function () {
        $scope.selected = undefined;
        resetCarousel();
    }

    function loadCarousel () { 
        $(`<div id="myCarousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators"></ol> 
                <div class="carousel-inner"></div>
                <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#myCarousel" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>`
        ).appendTo('.slideshow');
    }
 
    function appendPictures (pictures) {
        for(var i=0; i< pictures.length; i++) {
            $('<div class="item"><img src="'+pictures[i]+'"><div class="carousel-caption"></div></div>')
                .appendTo('.carousel-inner');
            $('<li class="indicators removable" data-target="#myCarousel" data-slide-to="'+i+'}"></li>')
                .appendTo('.carousel-indicators');
        }
        $('.item').first().addClass('active');
        $('.carousel-indicators > li').first().addClass('active');
    }

    function resetCarousel () {
        $('.slide').remove();
    }
});
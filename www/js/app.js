var ggr = angular.module('GGR', ['ionic', 'ngResource', 'ngCordova']);
ggr.value('urlBaseService', 'http://localhost:20882');
ggr.value('modoAppNotificacao', '2'); //1 = Alert; 2 = Console; 3 = Sem Alert e Sem Console


ggr.config(['$stateProvider', '$urlRouterProvider','$httpProvider', 
    function($stateProvider, $urlRouterProvider, $httpProvider) {
        $urlRouterProvider.otherwise('/lee/inicial');

        $stateProvider
            .state('lee', {
              url: "/lee",
              abstract: true,
              templateUrl: "templates/_layout.html"
            })
            .state('lee.inicial', {
                url: '/inicial',
                templateUrl: 'templates/inicial.html', 
                controller: 'InicialCtrl'
                
            })
            .state('lee.declaracao', {
                url: '/declaracao',
                templateUrl: 'templates/declaracao.html', 
                controller: 'DeclaracaoCtrl'
            })
            .state('lee.fotos', {
                url: '/fotos',
                templateUrl: 'templates/fotos.html', 
                controller: 'FotosCtrl'           
            });


        //$httpProvider.interceptors.push('HttpIntercept');
    }
]);

ggr.run(function($ionicPlatform, $rootScope, $ionicLoading) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
            StatusBar.styleDefault();
        }
    });


    $rootScope.$on('loading:show', function() {
        $ionicLoading.show({template: 'Aguarde...'})
    });

    $rootScope.$on('loading:hide', function() {
        $ionicLoading.hide()
    });
})

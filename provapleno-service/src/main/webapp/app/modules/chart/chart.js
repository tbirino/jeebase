angular.module('pocJEE.chart', [ 'oc.lazyLoad', 'ui.router' ])

.config([ '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/chart');

        $stateProvider.state('app.private.chart',{
            templateUrl: 'modules/chart/view/chart.html',
            url: '/chart',
            controller: 'ChartController',
            resolve:  {
                loadMyFile: function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'chart.js',
                        files: [
                            'bower_components/angular-chart.js/dist/angular-chart.min.js',
                            'bower_components/angular-chart.js/dist/angular-chart.css'
                        ]
                    }),
                        $ocLazyLoad.load({
                            name: 'pocJEE.chart',
                            files: ['modules/chart/controller/chart-controller.js']
                        })
                }
            }
        });
    } ]);

module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ["css"]
                },
                files: {
                    "css/style.css": "css/style.less"
                }
            },
            production: {
                options: {
                    paths: ["css"],
                    cleancss: true,
                    compress: true,
                },
                files: {
                    "css/style.css": "css/style.less"
                }
            }
        },
        ngAnnotate: {
            options: {
                singleQuotes: true,
            },
            build: {
                files: {
                    'build.js': [
                        'js/locales/i18n.js',
                        'js/locales/en.js',
                        'js/locales/fr.js',
                        'js/locales/pt.js',
                        'js/external/inview.js',
                        'js/languages/languages.service.js',
                        'js/menu/menu.directive.js',
                        'js/menu/menu.controller.js',
                        'js/home/home.controller.js',
                        'js/howToGet/howToGet.directive.js',
                        'js/howToGet/howToGet.controller.js',
                        'js/howToGet/howToGet.service.js',
                        'js/howToGet/airplane/airplane.directive.js',
                        'js/howToGet/airplane/airplane.controller.js',
                        'js/howToGet/boat/boat.directive.js',
                        'js/howToGet/boat/boat.controller.js',
                        'js/howToGet/land/land.directive.js',
                        'js/howToGet/land/land.controller.js',
                        'js/external/ng-infinite-scroll.js',
                        'js/hotels/hotels.directive.js',
                        'js/hotels/hotels.controller.js',
                        'js/hotels/hotels.service.js',
                        'js/thingsToDo/thingsToDo.directive.js',
                        'js/main-app.js'
                    ]
                }
            }
        },
        uglify: {
            build: {
                files: {
                    'build.min.js': [
                        'node_modules/jquery/dist/jquery.min.js',
                        'node_modules/angular/angular.min.js',
                        'node_modules/angular-route/angular-route.min.js',
                        'js/external/angular-translate.min.js',
                        'node_modules/lodash/index.js',
                        'js/external/angular-seo.js',
                        'node_modules/angular-google-maps/node_modules/angular-simple-logger/dist/angular-simple-logger.min.js',
                        'node_modules/angular-google-maps/dist/angular-google-maps.min.js',
                        'build.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['less']);
}

/*
 <script src="node_modules/jquery/dist/jquery.min.js"></script>
 <script src="node_modules/angular/angular.min.js"></script>
 <script src="node_modules/angular-route/angular-route.min.js"></script>
 <script src="js/external/angular-translate.min.js"></script>
 <script src="node_modules/lodash/index.js"></script>
 <script src="js/external/angular-seo.js"></script>
 <script src='node_modules/angular-google-maps/node_modules/angular-simple-logger/dist/angular-simple-logger.min.js'></script>
 <script src='node_modules/angular-google-maps/dist/angular-google-maps.min.js'></script>
 <script src='js/external/ng-infinite-scroll.js'></script>
 
 <script src="js/locales/i18n.js"></script>
 <script src="js/locales/en.js"></script>
 <script src="js/locales/fr.js"></script>
 <script src="js/locales/pt.js"></script>
 <script src="js/external/inview.js"></script>

 <script src="js/languages/languages.service.js"></script>

 <script src="js/menu/menu.directive.js"></script>
 <script src="js/menu/menu.controller.js"></script>

 <script src="js/home/home.controller.js"></script>

 <script src="js/howToGet/howToGet.directive.js"></script>
 <script src="js/howToGet/howToGet.controller.js"></script>
 <script src="js/howToGet/howToGet.service.js"></script>
 <script src="js/howToGet/airplane/airplane.directive.js"></script>
 <script src="js/howToGet/airplane/airplane.controller.js"></script>
 <script src="js/howToGet/boat/boat.directive.js"></script>
 <script src="js/howToGet/boat/boat.controller.js"></script>
 <script src="js/howToGet/land/land.directive.js"></script>
 <script src="js/howToGet/land/land.controller.js"></script>

 <script src="js/hotels/hotels.directive.js"></script>
 <script src="js/hotels/hotels.controller.js"></script>
 <script src="js/hotels/hotels.service.js"></script>

 <script src="js/thingsToDo/thingsToDo.directive.js"></script>

 <script src="js/main-app.js"></script>
* */
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
                        'js/thingsToDo/thingsToDo.controller.js',
                        'js/thingsToDo/thingsToDo.service.js',
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
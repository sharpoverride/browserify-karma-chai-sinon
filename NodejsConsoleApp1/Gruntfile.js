module.exports = function ( grunt ) {
    // project configuration
    grunt.initConfig( {
        pkg: grunt.file.readJSON( 'package.json' ),
        "browserify": {
            app: {
                files: {
                    'app.js': [
                        'src/**/*.js'
                    ],
                }
            },
            tests: {
                files: {
                    'app-tests.js': [
                        'src/**/*.js',
                        'tests/**/*.js'
                    ]
                },
                options: {
                    exclude: ['src/app.js'],
                    bundleOptions: {
                        debug: true
                    }
                }
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },
        watch: {
            files: ['src/**/*.js',
                        'tests/**/*.js'],
            tasks: ['browserify']
        }
    });

    grunt.loadNpmTasks( 'grunt-browserify' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );
    grunt.loadNpmTasks( 'grunt-karma' );

    grunt.registerTask( 'default', [
        'browserify'
    ] );

}
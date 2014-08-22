module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  var app_name = 'throatApp';
  var app_prefix = 'resources/public/' + app_name + '/';

  grunt.initConfig({
    clean: {
      options: { force: true },
      main: [app_prefix + '**/*']
    },
    ngtemplates: {
      app: {
        cwd: 'app/views/',
        src: '*.html',
        dest: app_prefix + 'views.js',
        options: {
          module: app_name,
          prefix: '/'
        }
      }
    },
    concat: {
      lib_js: {
        src: [
          "bower_components/jquery/dist/jquery.js",
          "bower_components/angular/angular.js",
          "bower_components/json3/lib/json3.js",
          "bower_components/bootstrap/dist/js/bootstrap.js",
          "bower_components/angular-resource/angular-resource.js",
          "bower_components/angular-cookies/angular-cookies.js",
          "bower_components/angular-sanitize/angular-sanitize.js",
          "bower_components/angular-animate/angular-animate.js",
          "bower_components/angular-touch/angular-touch.js",
          "bower_components/angular-route/angular-route.js",
          "bower_components/angular-formstamp/build/formstamp.js",
          "bower_components/ng-grid/build/ng-grid.js"
        ],
        dest: app_prefix + 'lib.js'
      },
      lib_css: {
        src: ['bower_components/bootstrap/dist/css/bootstrap.css',
        'bower_components/angular-formstamp/build/formstamp.css',
        'bower_components/ng-grid/ng-grid.css'
        ],
        dest: app_prefix + 'css/lib.css'
      },
      app_js: {
        src: [ 'app/scripts/app.js','app/scripts/controllers/*', app_prefix + 'views.js' ],
        dest: app_prefix + 'app.js'
      }
    },
    copy: {
      index: {
        src: 'app/index.html',
        dest: app_prefix + 'index.html'
      },
      styles: {
        src: 'app/styles/app.css',
        dest: app_prefix + 'css/app.css'
      },
      images: {
        cwd: 'app/images/',
        src: ['**'],
        expand: true,
        dest: app_prefix + 'images/'
      },
      ico: {
        src: 'app/favicon.ico',
        dest: app_prefix + 'favicon.ico'
      }
    },
    connect: {
      server: {
        options: {
          hostname: 'localhost',
          port: 9001,
          base: app_prefix,
          open: true,
          livereload: true
        }
      }
    },
    watch: {
      main: {
        files: ['app/views/**/*', 'app/index.html', 'app/scripts/**/*.js', 'app/styles/**/*.css'],
        tasks: ['build'],
        options: {
          event: ['all'],
          spawn: false,
          livereload: true
        }
      }  
    }

  }); 

  grunt.registerTask('build', ['clean', 'ngtemplates', 'concat', 'copy']);

  grunt.registerTask('serve', 'Compile then start a connect web server', ['build', 'connect', 'watch']);

};
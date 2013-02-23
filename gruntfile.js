module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'offpage.css': 'offpage.scss',
          'test/mobile-ui.css': ['mobile-app-ui/*.scss']
        }
      }
    },
    jshint: {
      files: ['*.js'],
      options: {
        globals: {
          module: true,
          console: true
        }
      }
    },
    watch: {
      files: ['*.scss', '*.js'],
      tasks: ['sass', 'jshint']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['sass', 'jshint']);
};

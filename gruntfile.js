module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'offpage.css': 'offpage.scss',
          'test/mobile-ui.css': ['node_modules/mobile-ui-lib/*.scss']
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

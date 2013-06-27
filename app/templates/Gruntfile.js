module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
 
  grunt.initConfig({
      fxos: {
        options: {
            app: 'app'
        }
    }
  });

};

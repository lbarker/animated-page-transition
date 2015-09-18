
module.exports = function(grunt) {
   "use strict";
   require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    //Initializing the configuration object
      
    grunt.initConfig({
      watch: {
        files: ["scss/*.scss", "scss/paritals/*.scss"],
        tasks: ['scss']
      },
      // "sass"-task configuration
      sass: {
          development: {
              options: {
                // includePaths: require('node-bourbon').with('other/path', 'another/path') 
                // - or - 
                loadPath: require('node-bourbon').includePaths
              },
              files: {
                //compiling frontend.less into frontend.css
                "./css/style.css":"./scss/style.scss",
              }
          }
      },
      
    });

    // The default task (running "grunt" in console) is "watch"
    grunt.registerTask('default', ['watch']);
        
    // Plugin loading
    grunt.registerTask('default',   []);
};
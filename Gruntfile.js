module.exports = function(grunt){

    var config = require( "./config.js" );
    grunt.initConfig( config );

    // Loading packages.
    for ( var key in config.pkg.devDependencies ) {
        if ( key.indexOf("grunt-") == 0 ) {
            grunt.loadNpmTasks( key );
        }
    }

    // Register tasks.
    for ( var key in config.tasks ) {
        grunt.registerTask( key, config.tasks[key] );
    }
}

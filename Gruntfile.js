module.exports = function (grunt){
    grunt.initConfig({
        run: {
            tests: {
                cmd: 'npm',
                args: [
                    'test'
                ]
            }
        }
    });
  
    grunt.loadNpmTasks('grunt-run');
    grunt.registerTask('test', ['run:tests']);
};
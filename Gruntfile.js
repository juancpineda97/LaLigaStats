module.exports = function (grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
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
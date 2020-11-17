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
        },

        docco: {
            debug: {
                src: ['src/*.js'],
                options: {
                    output : 'docs/docco'
                } 
            }
        }
    });
  
    grunt.loadNpmTasks('grunt-run');
    grunt.loadNpmTasks('grunt-docco');
    grunt.registerTask('test', ['run:tests']);
    grunt.registerTask('documentacion', ['docco']);
};
module.exports = function (grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        run: {
            tests: {
                cmd: 'npm',
                args: [
                    'test'
                ]
            },
            datos:{
                cmd: 'node',
                args: [
                    './src/getData.js'
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
        },

        clean: {
            archivos: ['docs/docco/']
        }
    });
  
    grunt.loadNpmTasks('grunt-run');
    grunt.loadNpmTasks('grunt-docco');
    grunt.loadNpmTasks('grunt-contrib-clean');  
    grunt.registerTask('test', ['run:tests']);
    grunt.registerTask('data', ['run:datos']);
    grunt.registerTask('documentacion', ['docco']);
    grunt.registerTask('borrar_doc', ['clean']);
};
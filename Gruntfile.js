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
            install: {
                cmd: 'npm',
                args: [
                    'install'
                ]
            },
            build: {
                cmd: 'echo',
                args: [
                    'build ya hecho'
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
    grunt.registerTask('installdeps', ['run:install']);
    grunt.registerTask('build', ['run:build'])
    grunt.registerTask('install', ['run:install'])
    grunt.registerTask('documentacion', ['docco']);
    grunt.registerTask('borrar_doc', ['clean']);
    grunt.registerTask('default', ['test']);
};
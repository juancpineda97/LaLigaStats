const gulp = require('gulp');
const jestcli = require('jest-cli');

gulp.task('test', function(done) {  
    jestcli.run();
    done();
});
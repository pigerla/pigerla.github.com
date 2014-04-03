module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            options: {
                keepSpecialComments: 0
            },
            compress: {
                files: {
                    '../assets/themes/DIYtheme/css/page.min.css': "../assets/themes/DIYtheme/css/page.css"
                }
            }
        }
    });

    //加载“cssmin”插件
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // 默认被执行的任务列表。
    grunt.registerTask('default', ['cssmin']);
};
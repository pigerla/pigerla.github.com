module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            options: {
                keepSpecialComments: 0
            },
//压缩为*.min.css文件
            minify: {
                expand: true,
                cwd: '../assets/themes/DIYtheme/css/',
                src: ['*.css', '!*.min.css'],
                dest: '../assets/themes/DIYtheme/css/',
                ext: '.min.css'
            },
//合并css
            combineCSS: {
                files: {
                    '../assets/css/combine.min.css': ['../assets/themes/DIYtheme/css/syntax.min.css', '../assets/themes/DIYtheme/css/screen.min.css', '../assets/themes/DIYtheme/css/page.min.css']
                }
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            combineJS: {
                files: {
                    '../assets/js/combine.min.js': ['../assets/js/search-xml.js' , '../assets/js/backToTop.js']
                }
            }
        }
    });

//加载 cssmin 插件
    grunt.loadNpmTasks('grunt-contrib-cssmin');
//加载 uglify 插件
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // 默认被执行的任务列表。
    grunt.registerTask('default', ['cssmin','uglify']);
};
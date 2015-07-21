'use strict';

module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// File watchers

		sass: {
			options: {
				sourceMap: true,
				outputStyle: 'expanded'
			},
			dist: {
				files: {
					'./css/code-guardian.css': './css/code-guardian.scss'
				}
			}
		},

		watch: {
			sassWatch: {
				files: ['./css/**/*.scss'],
				tasks: ['sass']
			}
		},

		// sprite generation
		// please use it manually by exec 'grunt spriteGeneric' command

		spriteGeneric: {
			global : {
				src: './images/global-sprite/*.png',
				dest: './images/global-sprite.png',
				destCss: './sass/lib/_sprite.scss',
				padding: 20
			}
		}
	});

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.loadNpmTasks('grunt-spritesmith');

	grunt.registerTask('default', ['watch']);

};
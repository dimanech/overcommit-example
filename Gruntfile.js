'use strict';

module.exports = function(grunt) {

	var cartridgePath = "./cartridges/tb2_app_storefront/cartridge/static/default/";

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// file watchers

		sass: {
			options: {
				sourceMap: true,
				outputStyle: 'expanded'
			},
			dist: {
				files: {
					'./cartridges/tb2_app_storefront/cartridge/static/default/css/styles.css': cartridgePath + '/sass/styles.scss',
					'./cartridges/tb2_app_storefront/cartridge/static/default/css/scsslint-test.css': cartridgePath + '/sass/scsslint-test.scss'
				}
			}
		},

		watch: {
			sassWatch: {
				files: [cartridgePath + 'sass/**/*.scss'],
				tasks: ['sass']
			}
		},

		// sprite generation
		// please use it manually by exec 'grunt spriteGeneric' command

		spriteGeneric: {
			global : {
				src: cartridgePath + 'images/global-sprite/*.png',
				dest: cartridgePath + 'images/global-sprite.png',
				destCss: cartridgePath + 'sass/lib/_sprite.scss',
				padding: 20
			}
		},

		// css comb. Need for build
		// please use it manually by exec 'grunt csscomb' command

		csscomb: {
			dynamic_mappings: {
				expand: true,
				cwd: cartridgePath + '/sass/',
				src: ['**/*.scss'],
				dest: cartridgePath + '/sass/'
			}
		}
	});

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.loadNpmTasks('grunt-spritesmith');

	grunt.loadNpmTasks('grunt-csscomb');

	grunt.registerTask('default', ['watch']);

};
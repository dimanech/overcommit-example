'use strict';

module.exports = function(grunt) {

	var cartridgePath = "./cartridges/tb2_app_storefront/cartridge/static/default/";

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// file watchers

		sass: {
			options: {
				sourceMap: true,
				outputStyle: 'nested'
			},
			dist: {
				files: {
					'./cartridges/tb2_app_storefront/cartridge/static/default/css/styles.css': cartridgePath + '/sass/styles.scss',
					'./cartridges/tb2_app_storefront/cartridge/static/default/css/scsslint-test.css': cartridgePath + '/sass/scsslint-test.scss'
				}
			}
		},

		csscombProd: {
			options: {
				config: './.csscomb-prod.json'
			},
			dynamic_mappings: {
				expand: true,
				cwd: cartridgePath + '/css/',
				src: ['*.css'],
				dest: cartridgePath + '/css/'
			}
		},

		watch: {
			sassWatch: {
				files: [cartridgePath + 'sass/**/*.scss'],
				tasks: ['newer:sass']
			},
			combWatch: {
				files: [cartridgePath + 'css/*.css'],
				tasks: ['newer:csscombProd']
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
		}
	});

	grunt.loadNpmTasks('grunt-newer');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-csscomb');
	grunt.loadNpmTasks('grunt-spritesmith');

	grunt.registerTask('default', ['watch']);

};
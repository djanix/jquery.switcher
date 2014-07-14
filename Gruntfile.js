module.exports = function (grunt) {
	require('matchdep').filterDev('grunt-*').forEach(
		grunt.loadNpmTasks
	);

	var config = {
		destFolder: 'dist',
		banner: '/* <%= pkg.name %> - <%= pkg.version %>\n' +
				'<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
				'* Copyright (c) <%= grunt.template.today("yyyy-mm-dd") %> <%= pkg.author.name %> - <%= pkg.author.url %> */\n\n'
	};

	grunt.initConfig({
		config: config,
		pkg: grunt.file.readJSON('package.json'),
		banner: '<%= config.banner %>',
		autoprefixer: {
			single_file: {
				options: {
					browsers: ['last 3 version', '> 1%', 'ie 8']
				},
				src: '<%= config.destFolder %>/*.css'
			}
		},
		copy: {
			main: {
				src: 'switcher.js',
				dest: '<%= config.destFolder %>/switcher.js'
			}
		},
		jshint: {
			files: ['switcher.js'],
			options: {
				force: true
			}
		},
		sass: {
			dist: {
				options: {
					style: 'expanded',
					banner: '<%= config.banner %>'
				},
				files: [
					{
						src: 'switcher.scss',
						dest: '<%= config.destFolder %>/switcher.css'
					}
				]
			},
			minified: {
				options: {
					style: 'compressed',
					banner: '<%= config.banner %>'
				},
				files: [
					{
						src: 'switcher.scss',
						dest: '<%= config.destFolder %>/switcher.min.css'
					}
				]
			}
		},
		uglify: {
			dist: {
				options: {
					banner: '<%= config.banner %>'
				},
				files: {
					'<%= config.destFolder %>/switcher.min.js': ['switcher.js']
				}
			}
		},
		watch: {
			js: {
				files: ['switcher.js'],
				tasks: ['build:js']
			},
			sass: {
				files: ["switcher.scss"],
				tasks: ['build:css']
			},
			options: {
				spawn: true
			}
		}
	});

	grunt.registerTask('default', ['build:js', 'build:css', 'watch']);

	grunt.registerTask('build', ['build:js', 'build:css']);
	grunt.registerTask('build:css', ['sass', 'autoprefixer']);
	grunt.registerTask('build:js', ['jshint', 'copy', 'uglify']);
};
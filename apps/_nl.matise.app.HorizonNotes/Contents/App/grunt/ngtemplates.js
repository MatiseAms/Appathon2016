module.exports = {
	dev: {
		options: {
			append: true,
			module: 'notes'
		},
		cwd: '<%= config.src.app %>',
		src: [
			'**/*.html',
			'!*.html'
		],
		dest: '<%= config.dist.root %>notes.js'
	},
	dist: {
		options: {
			append: true,
			module: 'notes',
			htmlmin: {
				removeComments: true,
				collapseWhitespace: true,
				collapseBooleanAttributes: true
			}
		},
		cwd: '<%= config.src.app %>',
		src: [
			'**/*.html',
			'!*.html'
		],
		dest: '<%= config.dist.root %>notes.js'
	}
};

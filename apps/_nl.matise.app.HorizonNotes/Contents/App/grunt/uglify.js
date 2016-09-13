module.exports = {
	demo: {
		files: [{
			'<%= config.dist.root %>notes.js': ['<%= config.dist.root %>notes.js'],
			'<%= config.dist.root %>vendor.js': ['<%= config.dist.root %>vendor.js']
		}]
	}
};

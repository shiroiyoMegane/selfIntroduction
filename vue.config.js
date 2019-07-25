module.exports = {
	pages: {
		'index': {
			entry: './src/pages/home/main.js',
			template: 'public/index.html',
			title: 'home',
			filename: 'index.html',
		},
		'test': {
			entry: './src/pages/test/main.js',
			template: 'public/index.html',
			title: 'test',
			filename: 'test/index.html',
		}
	}
}
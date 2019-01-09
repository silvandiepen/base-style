var sass = require('sass');
var Fiber = require('fibers');
var fs = require('fs');


sass.render(
	{
		file: 'src/scss/app.scss',
		// importer: function(url, prev, done) {
		//   // ...
		// },
		fiber: Fiber
	},
	function(err, result) {
		if (err) throw err;
		
		fs.writeFile('dist/app.css', result.css, (err) => {
			if (err) throw err;
			console.log('The file has been saved!');
		});
	}
);

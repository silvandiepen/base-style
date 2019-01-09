var sass = require('sass');
var Fiber = require('fibers');
var fs = require('fs');

function renderBaseStyle() {
	sass.render(
		{
			file: 'src/scss/app.scss',
			fiber: Fiber
		},
		function(err, result) {
			if (err) throw err;

			fs.writeFile('dist/app.css', result.css, (err) => {
				if (err) throw err;
				console.log('App has been saved!');
			});
		}
	);
}

function renderGridStyle() {
	sass.render(
		{
			file: 'src/scss/grid.scss',
			fiber: Fiber
		},
		function(err, result) {
			if (err) throw err;

			fs.writeFile('dist/grid.css', result.css, (err) => {
				if (err) throw err;
				console.log('Grid has been saved!');
			});
		}
	);
}

renderBaseStyle();
renderGridStyle();

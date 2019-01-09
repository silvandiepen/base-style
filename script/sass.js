var sass = require('sass');
var Fiber = require('fibers');
var fs = require('fs');

function renderBaseStyle() {
	sass.render(
		{
			file: 'src/scss/index.scss',
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
			file: 'src/scss/index.grid.scss',
			fiber: Fiber
		},
		function(err, result) {
			if (err) throw err;

			fs.writeFile('dist/app.grid.css', result.css, (err) => {
				if (err) throw err;
				console.log('Grid has been saved!');
			});
		}
	);
}
function renderFullStyle() {
	sass.render(
		{
			file: 'src/scss/index.full.scss',
			fiber: Fiber
		},
		function(err, result) {
			if (err) throw err;

			fs.writeFile('dist/app.full.css', result.css, (err) => {
				if (err) throw err;
				console.log('Grid has been saved!');
			});
		}
	);
}

renderBaseStyle();
renderGridStyle();
renderFullStyle();

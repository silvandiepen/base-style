const fs = require('fs');

try {
	fs.exists('dist/app.css');
} catch (e) {
	throw new Error(e);
}
try {
	fs.exists('dist/app.grid.css');
} catch (e) {
	throw new Error(e);
}

try {
	fs.exists('dist/app.full.css');
} catch (e) {
	throw new Error(e);
}


const exec = require('child_process').exec;
const path = require('path');

return exec('yarn outdated', {cwd: path.resolve('./')}, (error, stdout, stderr) => {
	return error ? console.log(error) : console.log("SUCCESS");
});
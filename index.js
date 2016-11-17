require('malta').checkDeps('markdown');

var markdown = require("markdown").markdown,
	path = require('path'),
	fs = require('fs');

function malta_markdown(o, options) {
	var self = this,
		start = new Date(),
		msg,
        pluginName = path.basename(path.dirname(__filename)),
		doErr = function (e) {
			console.log(('[ERROR on ' + o.name + ' using ' + pluginName + '] :').red());
			console.dir(e);
			self.stop();
		};

	o.name = o.name.replace(/\.md$/, '.html');

	try{
		o.content = markdown.toHTML(o.content);
	} catch(err) {
		doErr(err);
	}

	return function (solve, reject){
		fs.writeFile(o.name, o.content, function(err) {
			err && doErr(err);
			msg = 'plugin ' + pluginName.white() + ' wrote ' + o.name + ' (' + self.getSize(o.name) + ')';
			solve(o);
			self.notifyAndUnlock(start, msg);
		});
	};
}
malta_markdown.ext = 'md';
module.exports = malta_markdown;
require('malta').checkDeps('markdown');

var markdown = require("markdown").markdown,
	path = require('path'),
	fs = require('fs');

function malta_markdown(o, options) {
	var self = this,
		start = new Date(),
		msg;

	o.name = o.name.replace(/\.md$/, '.html');

	o.content = markdown.toHTML(o.content);

	return function (solve, reject){
		
		fs.writeFile(o.name, o.content, function(err) {
			if (err == null) {
				msg = 'plugin ' + path.basename(__filename) + ' wrote ' + o.name + ' (' + self.getSize(o.name) + ')';
			} else {
				console.log('[ERROR] markdown says:');
				console.dir(err);
				self.stop();
			}
			solve(o);
			self.notifyAndUnlock(start, msg);
		});
	};
}
malta_markdown.ext = 'md';
module.exports = malta_markdown;
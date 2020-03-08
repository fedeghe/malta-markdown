const markdown = require("markdown").markdown,
	path = require('path'),
	fs = require('fs');

function malta_markdown(o, options) {
	const self = this,
		start = new Date(),
        pluginName = path.basename(path.dirname(__filename)),
        oldname = o.name;
    
    let msg;

	o.name = o.name.replace(/\.md$/, '.html');

	return (solve, reject) => {
        try {
            o.content = markdown.toHTML(o.content);
            fs.writeFile(o.name, o.content, err => {
                err && self.doErr(err, o, pluginName);
                msg = 'plugin ' + pluginName.white() + ' wrote ' + o.name + ' (' + self.getSize(o.name) + ')';
                fs.unlink(oldname, () => {});
                err
                    ? reject(`Plugin ${pluginName} write error:\n${err}`)
                    : solve(o);
                self.notifyAndUnlock(start, msg);
            });
        } catch (err) {
            self.doErr(err, o, pluginName);
            reject(`Plugin ${pluginName} conversion error:\n${err}`)
        }
		
	};
}
malta_markdown.ext = 'md';
module.exports = malta_markdown;
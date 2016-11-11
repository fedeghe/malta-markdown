This plugin can be used on: **.md** files  

Options : no options  

Sample usage:   

    malta app/source/home.md public -plugins=malta-markdown

or in the .json file :

    "app/source/home.md" : "public -plugins=malta-markdown"

or in a script : 

    var Malta = require('malta');
    Malta.get().check([
        'app/source/home.md',
        'public',
        '-plugins=malta-markdown',
        '-options=showPath:false,watchInterval:500,verbose:0'
        ]).start(function (o) {
            var s = this;
            console.log('name : ' + o.name)
            console.log("content : \n" + o.content);
            'plugin' in o && console.log("plugin : " + o.plugin);
            console.log('=========');
            */
        });

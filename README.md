---
[![npm version](https://badge.fury.io/js/malta-markdown.svg)](http://badge.fury.io/js/malta-markdown)
[![Dependencies](https://david-dm.org/fedeghe/malta-markdown.svg)](https://david-dm.org/fedeghe/malta-markdown)
[![npm downloads](https://img.shields.io/npm/dt/malta-markdown.svg)](https://npmjs.org/package/malta-markdown)
[![npm downloads](https://img.shields.io/npm/dm/malta-markdown.svg)](https://npmjs.org/package/malta-markdown)  
---  

This plugin can be used on: **.md** files  

Options : no options  

Sample usage:   
```
malta app/source/home.md public -plugins=malta-markdown
```
or in the .json file :
```
"app/source/home.md" : "public -plugins=malta-markdown"
```
or in a script : 
``` js
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
    });
```
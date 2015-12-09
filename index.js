var fs = require("fs");
var minify = require('html-minifier').minify;

var engines = {
    doT:        require("./tmpl/doT"),
    ect:        require("./tmpl/ect"),
    jade:       require("./tmpl/jade"),
    nunjucks:   require("./tmpl/nunjucks"),
    swig:       require("./tmpl/swig")
};

var data = JSON.parse(fs.readFileSync(__dirname + "/data.json","utf-8"));

for(var i in engines){

    if(engines.hasOwnProperty(i)) {
        var start = new Date().getTime();

        var html = engines[i].render(data);
        //console.log(html);
        //console.log(minify(html,{
        //    removeAttributeQuotes: true,
        //    collapseWhitespace: true
        //}));

        var end = new Date().getTime();
        console.log(i + ": " + (end - start) + " ms");
    }
}
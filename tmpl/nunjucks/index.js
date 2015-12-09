var nunjucks  = require('nunjucks');

exports.render = function(data){
    return exports.renderFile(__dirname + '/template.html', data);
};

exports.renderFile = function(filepath, data){
    return nunjucks.render(filepath, data);
};

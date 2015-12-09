var swig  = require('swig');

exports.render = function(data){
    return exports.renderFile(__dirname + '/template.html', data);
};

exports.renderFile = function(filepath, data){
    return swig.renderFile(filepath, data);
};

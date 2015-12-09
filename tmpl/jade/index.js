var jade  = require('jade');

exports.render = function(data){
    return exports.renderFile(__dirname + '/template.jade', data);
};

exports.renderFile = function(filepath, data){
    return jade.renderFile(filepath, data);
};

var ect  = require('ect');

exports.render = function(data){
    return exports.renderFile(__dirname + '/template.ect', data);
};

exports.renderFile = function(filepath, data){
    return ect({root:'./'}).render(filepath, data);
};


var postcss = require('postcss');
var autoprefixer = require('autoprefixer-core');
//var prefixed     = autoprefixer.process('a { transition: transform 1s }').css;
var root = fis.project.getProjectPath();
//var compressor = require("compressor");

module.exports = function(content, file, conf){
    conf.paths = [ file.dirname, root ];
    conf.syncImport = true;
    conf.relativeUrls = true;
    var bowers_conf = fis.config.get("bowers_conf")||['> 1%', 'IE 9'];
    content = postcss().
                use( autoprefixer({ browsers: bowers_conf })).
                process(content);
	return content;
};
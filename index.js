const fs = require('fs');
const exec = require('child_process').exec;

function convert(pdfFile, jpgFile, resolutionRatio, callback) {
    fs.stat(pdfFile, function(err, stat) {
        if(err == null) {
            exec('gs -r' + resolutionRatio + ' -sDEVICE=jpeg -dFirstPage=1 -dLastPage=1 -o ' + jpgFile + ' ' + pdfFile,
                function (err, stdout, stderr) {
                    if (err) {
                        callback(err);
                    } else {
                        callback(null);
                    }
                });
        } else if(err) {
            callback(err);
        }
    });
}

module.exports = {
    convert: convert
}
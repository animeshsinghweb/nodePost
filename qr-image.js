var qrImage = require('qr-image');
var fs = require('fs');

qrImage
    .image("https://www.hostinko.com", { type: 'png', size: 20 })
    .pipe(fs.createWriteStream("images/qr_hostinko.png"));
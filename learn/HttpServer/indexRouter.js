const controllor = require('./indexControllor');
module.exports = {
    pageRoute(req, res) {
        let fileType = req.url.split('.');
        switch (fileType[1]) {
            case "html":
                controllor.sendHtml(fileType[0], res);
                break;
            case "css":
                controllor.sendCss(fileType[0], res);
                break;
            case "js":
                controllor.sendJs(fileType[0], res);
                break;
            case 'jpg':
            case 'png':
                controllor.sendJs(fileType[0], res);
                break;
            default:
                controllor.sendDefault(fileType[0], res);
                break;
        }
    }
}

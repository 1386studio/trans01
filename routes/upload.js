var express = require('express');
var router = express.Router();
var uuid = require('node-uuid');
router.post('/', function(req, res, next) {
  if (Object.keys(req.files).length == 0) {
    return res.status(400).send('No files were uploaded.');
  }
  let sampleFile = req.files['editormd-image-file'];
  var name = `${uuid.v4()}.${sampleFile.mimetype.split('/')[1]}`;
  sampleFile.mv(`${__dirname}/../public/upload/${name}`, function(err) {
    if (err)
      return res.status(500).send(err);
    res.send(
        {
            success : 1,           // 0 表示上传失败，1 表示上传成功
            message : "提示的信息，上传成功或上传失败及错误信息等。",
            url     : `/upload/${name}`        // 上传成功时才返回
        }
    );
  });
});
module.exports = router;
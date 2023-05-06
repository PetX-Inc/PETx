const path = require('path');
const multer = require('multer');

var storate = multer.diskStorage({
    destination : (req,file, cb) => {
        cb(null, path.join(__dirname, '../uploads'))
    },
    filename : (req,file,cb) => {
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
    }
})


var upload = multer({
    storage : storate,
    fileFilter : (req,file,cb) => {
        if(file.mimetype === "image/png" || file.mimetype === "image/jpg"){
            cb(null,true)
        }
        else{
            console.log("Only JPG and PNG allowed")
            cb(null, false)
        }
    },
    limits : {
        fileSize : 2 * 1024 * 1024
    }
})


module.exports = upload
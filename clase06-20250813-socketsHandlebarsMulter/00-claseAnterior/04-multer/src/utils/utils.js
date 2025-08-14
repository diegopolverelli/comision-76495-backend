const multer = require("multer")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/uploads')
    },
    filename: function (req, file, cb) {
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        // file.originalname
        // file.
        cb(null, Date.now()+"-"+file.originalname)
    }
})

// const uploader = multer({ storage: storage })
const uploader = multer({ storage })

module.exports={uploader}
import multer from 'multer';

const storage = multer.diskStorage({
    destination(_req, _file, cb) {
        cb(null, `${process.cwd()}/public/files`);
    },
    filename(_req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage });

export default upload;

const express = require('express');
const multer = require('multer');

const response = require('../../network/response');
const controller = require('./controller');

const { FILES_PATH } = require('./config')
const { getHashedFileName } = require('../../utils/files');


const router = express.Router();

const storage = multer.diskStorage({
    destination: `public/${FILES_PATH}/`,
    filename: function (req, file, cb) {
        cb(null, getHashedFileName(file.originalname));
    },
});

const upload = multer({ storage });

router.get('/', (req, res) => {
    controller
        .getMessages(req.query)
        .then((messages) => response.success(req, res, messages))
        .catch(({ errorMessage, error, status }) =>
            response.error(req, res, errorMessage, { status, error }),
        );
});

router.post('/', upload.single('file'), (req, res) => {
    const { body, file } = req;

    controller
        .addMessage({
            ...body,
            file,
        })
        .then((fullMessage) =>
            response.success(req, res, fullMessage, { status: 201 }),
        )
        .catch(({ errorMessage, error, status }) =>
            response.error(req, res, errorMessage, { status, error }),
        );
});

router.patch('/:id', (req, res) => {
    controller
        .updateMessage(req.params.id, req.body)
        .then((updatedMessage) => response.success(req, res, updatedMessage))
        .catch(({ errorMessage, error, status }) =>
            response.error(req, res, errorMessage, { status, error }),
        );
});

router.delete('/:id', (req, res) => {
    controller
        .deleteMessage(req.params.id)
        .then(() =>
            response.success(req, res, null, {
                status: 204,
            }),
        )
        .catch(({ errorMessage, error, status }) =>
            response.error(req, res, errorMessage, { status, error }),
        );
});

module.exports = router;

import { Router } from 'express';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
var cors = require('cors')
var corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 200
  }



const router = Router();

router.get('/',cors(corsOptions), (req, res, next) => {
    let rawdata = fs.readFileSync('result.json');
    let data = JSON.parse(rawdata);
    res.status(200).json(data["Capitalisation"]);
});
router.get('/globale',cors(corsOptions), (req, res, next) => {
    let rawdata = fs.readFileSync('result.json');
    let data = JSON.parse(rawdata);
    res.status(200).json(data["Capitalisation"]["Capitalisation en MAD"]);
});
router.get('/top10',cors(corsOptions), (req, res, next) => {
    let rawdata = fs.readFileSync('result.json');
    let data = JSON.parse(rawdata);
    res.status(200).json(data["Capitalisation"].Capitalisations);
});

router.post('/',cors(corsOptions), (req, res, next) => {
    res.status(200).json({
        message: 'Post requests to /capitalisation'
    });
});

export default router;
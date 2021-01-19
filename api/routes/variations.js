import { Router } from 'express';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const router = Router();
var cors = require('cors')
var corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 200
  }
  
router.get('/',cors(corsOptions), (req, res, next) => {
    let rawdata = fs.readFileSync('result.json');
    let data = JSON.parse(rawdata);
    res.status(200).json(data["variations"]);
});
router.get('/pfhausses',cors(corsOptions), (req, res, next) => {
    let rawdata = fs.readFileSync('result.json');
    let data = JSON.parse(rawdata);
    res.status(200).json(data["variations"].pfhausses);
});
router.get('/pfbaisses',cors(corsOptions), (req, res, next) => {
    let rawdata = fs.readFileSync('result.json');
    let data = JSON.parse(rawdata);
    res.status(200).json(data["variations"].pfbaisses);
});

router.post('/',cors(corsOptions), (req, res, next) => {
    res.status(200).json({
        message: 'Post requests to /indices'
    });
});

export default router;
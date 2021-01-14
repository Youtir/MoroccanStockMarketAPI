import { Router } from 'express';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');



const router = Router();

router.get('/', (req, res, next) => {
    let rawdata = fs.readFileSync('result.json');
    let data = JSON.parse(rawdata);
    res.status(200).json(data["Volume"]);
});
router.get('/globale', (req, res, next) => {
    let rawdata = fs.readFileSync('result.json');
    let data = JSON.parse(rawdata);
    res.status(200).json(data["Volume"]["volume global"]);
});
router.get('/top10', (req, res, next) => {
    let rawdata = fs.readFileSync('result.json');
    let data = JSON.parse(rawdata);
    res.status(200).json(data["Volume"].Instruments);
});
router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Post requests to /indices'
    });
});

export default router;
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

router.get('/', cors(corsOptions), (req, res, next) => {
  let rawdata = fs.readFileSync('result.json');
  let data = JSON.parse(rawdata);
  res.status(200).json(data);
});

export default router;
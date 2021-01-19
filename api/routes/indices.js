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
  let indices = JSON.parse(rawdata);
  res.status(200).json(indices["indices"]);
});

router.get('/cours',cors(corsOptions), (req, res) => {
  const name = req.query.name
  ;(async () => {
    let rawdata = fs.readFileSync('result.json');
    let indices = JSON.parse(rawdata);
    let founddata = null;
    for (let ind in indices["indices"]) {
      if (indices["indices"][ind].name === name) {
        founddata = indices["indices"][ind].cours;
        break;
    }
}
    res.status(200).json(founddata);
  })()
})
router.get('/lbvar',cors(corsOptions), (req, res) => {
  const name = req.query.name
  ;(async () => {
    let rawdata = fs.readFileSync('result.json');
    let indices = JSON.parse(rawdata);
    let founddata = null;
    for (let ind in indices["indices"]) {
      if (indices["indices"][ind].name === name) {
        founddata = indices["indices"][ind].lbvar;
        break;
    }
}
    res.status(200).json(founddata);
  })()
})
router.get('/evolution',cors(corsOptions), (req, res) => {
  const name = req.query.name
  ;(async () => {
    let rawdata = fs.readFileSync('result.json');
    let indices = JSON.parse(rawdata);
    let founddata = null;
    for (let ind in indices["indices"]) {
      if (indices["indices"][ind].name === name) {
        founddata = indices["indices"][ind].evolution;
        break;
    }
}
    res.status(200).json(founddata);
  })()
})

router.post('/',cors(corsOptions), (req, res, next) => {
  res.status(200).json({
    message: 'Post requests to /indices'
  });
});

export default router;
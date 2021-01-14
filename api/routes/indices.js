import { Router } from 'express';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');



const router = Router();

router.get('/', (req, res, next) => {
  let rawdata = fs.readFileSync('result.json');
  let indices = JSON.parse(rawdata);
  res.status(200).json(indices["indices"]);
});

router.get('/cours', (req, res) => {
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
router.get('/lbvar', (req, res) => {
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
router.get('/evolution', (req, res) => {
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

router.post('/', (req, res, next) => {
  res.status(200).json({
    message: 'Post requests to /indices'
  });
});

export default router;
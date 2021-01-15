import { Router } from 'express';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');


const router = Router();

router.get('/', (req, res, next) => {
  let rawdata = fs.readFileSync('result.json');
  let data = JSON.parse(rawdata);
  res.status(200).json(data);
});

export default router;
import express from 'express';
const app = express();

import indicesroutes from './api/routes/indices.js';

app.use('/indices', indicesroutes);


export default app;
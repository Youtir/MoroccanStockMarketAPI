import express from 'express';
const app = express();

///////////////////
import indicesroutes from './api/routes/indices.js';
app.use('/indices', indicesroutes);
app.use('/indices/cours', indicesroutes);//with parameter name
app.use('/indices/lbvar', indicesroutes);//with parameter name
app.use('/indices/evolution', indicesroutes);//with parameter name
///////////////////
import variationssroutes from './api/routes/variations.js';
app.use('/variations', variationssroutes);
app.use('/variations/pfhausses', variationssroutes);
app.use('/variations/pfbaisses', variationssroutes);

///////////////////
import volumeroutes from './api/routes/volume.js';
app.use('/volume', volumeroutes);
app.use('/volume/globale', volumeroutes);
app.use('/volume/top10', volumeroutes);

///////////////////
import capitalisationroutes from './api/routes/capitalisation.js';
app.use('/capitalisation', capitalisationroutes);
app.use('/capitalisation/globale', capitalisationroutes);
app.use('/capitalisation/top10', capitalisationroutes);
///////////////////


export default app;
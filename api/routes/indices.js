import { Router } from 'express';
import axios from 'axios';
import cheerio from 'cheerio';

const url = 'http://www.casablanca-bourse.com/bourseweb/index.aspx';

let res = await axios.get(url);
let $ = cheerio.load(res.data);
let contentJSON = {
    indices: [
      {
        name: $("a#FrontTabContainer1_ctl00_MasiMadex1_HyperLink2").text().trim(),
        cours: $("span#FrontTabContainer1_ctl00_MasiMadex1_LBValMSI").text().trim(),
        lbvar: $("span#FrontTabContainer1_ctl00_MasiMadex1_LBVarMSI>font").text().trim(),
        evolution: $("span#FrontTabContainer1_ctl00_MasiMadex1_LBMSIEvolution>font").text().trim()
      },
      {
        name: $("a#FrontTabContainer1_ctl00_MasiMadex1_lnkMasi").text().trim(),
        cours: $("span#FrontTabContainer1_ctl00_MasiMadex1_LBValMasi").text().trim(),
        lbvar: $("span#FrontTabContainer1_ctl00_MasiMadex1_LBVarMasi>font").text().trim(),
        evolution: $("span#FrontTabContainer1_ctl00_MasiMadex1_LBMasEvolution>font").text().trim()
      },
      {
        name: $("a#FrontTabContainer1_ctl00_MasiMadex1_Label5").text().trim(),
        cours: $("span#FrontTabContainer1_ctl00_MasiMadex1_LBValVcse").text().trim(),
        lbvar: $("span#FrontTabContainer1_ctl00_MasiMadex1_LBVarVcse>font").text().trim(),
        evolution: $("span#FrontTabContainer1_ctl00_MasiMadex1_LBVcseEvolution>font").text().trim()
      }
  ]};

const router = Router();

router.get('/', (req, res, next) => {
    res.status(200).json(contentJSON);
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Post requests to /indices'
    });
});

export default router;
import { createServer } from 'http';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const puppeteer = require('puppeteer');
const fs = require('fs');
import app from './app.js';
const port = process.env.PORT || 3000;
const server = createServer(app);
server.listen(port);

var loop = async function(){
    const browser = await puppeteer.launch({ headless: true , args: ['--no-sandbox'] });
    const page = await browser.newPage();
    await page.goto("http://www.casablanca-bourse.com/bourseweb/index.aspx", { waitUntil: "networkidle2" });
    await page.setViewport({ width: 1680, height: 920 });
    await page.waitForSelector("a#FrontTabContainer1_ctl00_MasiMadex1_HyperLink2");
    const indices = [
      {
        name: await page.$eval("a#FrontTabContainer1_ctl00_MasiMadex1_HyperLink2", el => el.textContent.trim()),
        cours: await page.$eval("span#FrontTabContainer1_ctl00_MasiMadex1_LBValMSI", el => el.textContent.trim()),
        lbvar: await page.$eval("span#FrontTabContainer1_ctl00_MasiMadex1_LBVarMSI>font", el => el.textContent.trim()),
        evolution: await page.$eval("span#FrontTabContainer1_ctl00_MasiMadex1_LBMSIEvolution>font", el => el.textContent.trim())
      },
      {
        name: await page.$eval("a#FrontTabContainer1_ctl00_MasiMadex1_lnkMasi", el => el.textContent.trim()),
        cours: await page.$eval("span#FrontTabContainer1_ctl00_MasiMadex1_LBValMasi", el => el.textContent.trim()),
        lbvar: await page.$eval("span#FrontTabContainer1_ctl00_MasiMadex1_LBVarMasi>font", el => el.textContent.trim()),
        evolution: await page.$eval("span#FrontTabContainer1_ctl00_MasiMadex1_LBMasEvolution>font", el => el.textContent.trim())
      },
      {
        name: await page.$eval("a#FrontTabContainer1_ctl00_MasiMadex1_Label5", el => el.textContent.trim()),
        cours: await page.$eval("span#FrontTabContainer1_ctl00_MasiMadex1_LBValVcse", el => el.textContent.trim()),
        lbvar: await page.$eval("span#FrontTabContainer1_ctl00_MasiMadex1_LBVarVcse>font", el => el.textContent.trim()),
        evolution: await page.$eval("span#FrontTabContainer1_ctl00_MasiMadex1_LBVcseEvolution>font", el => el.textContent.trim())
      }
    ];
    await page.click("input#FrontTabContainer1_ctl00_ImageButton2");
    await page.waitForSelector("span#FrontTabContainer1_ctl00_Variation1_FrtesHV1_RptrVarHaut_ctl01_Label1");
    const pfH = [
      {
        instrument: await page.$eval("span#FrontTabContainer1_ctl00_Variation1_FrtesHV1_RptrVarHaut_ctl01_Label1", el => el.textContent.trim()),
        cours: await page.$eval("span#FrontTabContainer1_ctl00_Variation1_FrtesHV1_RptrVarHaut_ctl01_Label2", el => el.textContent.trim()),
        difference: await page.$eval("span#FrontTabContainer1_ctl00_Variation1_FrtesHV1_RptrVarHaut_ctl01_Label3>font", el => el.textContent.trim()),
        diff_percent: await page.$eval("span#FrontTabContainer1_ctl00_Variation1_FrtesHV1_RptrVarHaut_ctl01_Label4>font", el => el.textContent.trim())
      },
      {
        instrument: await page.$eval("span#FrontTabContainer1_ctl00_Variation1_FrtesHV1_RptrVarHaut_ctl02_Label1", el => el.textContent.trim()),
        cours: await page.$eval("span#FrontTabContainer1_ctl00_Variation1_FrtesHV1_RptrVarHaut_ctl02_Label2", el => el.textContent.trim()),
        difference: await page.$eval("span#FrontTabContainer1_ctl00_Variation1_FrtesHV1_RptrVarHaut_ctl02_Label5>font", el => el.textContent.trim()),
        diff_percent: await page.$eval("span#FrontTabContainer1_ctl00_Variation1_FrtesHV1_RptrVarHaut_ctl02_Label4>font", el => el.textContent.trim())
      },
      {
        instrument: await page.$eval("span#FrontTabContainer1_ctl00_Variation1_FrtesHV1_RptrVarHaut_ctl03_Label1", el => el.textContent.trim()),
        cours: await page.$eval("span#FrontTabContainer1_ctl00_Variation1_FrtesHV1_RptrVarHaut_ctl03_Label2", el => el.textContent.trim()),
        difference: await page.$eval("span#FrontTabContainer1_ctl00_Variation1_FrtesHV1_RptrVarHaut_ctl03_Label3>font", el => el.textContent.trim()),
        diff_percent: await page.$eval("span#FrontTabContainer1_ctl00_Variation1_FrtesHV1_RptrVarHaut_ctl03_Label4>font", el => el.textContent.trim())
      },
      {
        instrument: await page.$eval("span#FrontTabContainer1_ctl00_Variation1_FrtesHV1_RptrVarHaut_ctl04_Label1", el => el.textContent.trim()),
        cours: await page.$eval("span#FrontTabContainer1_ctl00_Variation1_FrtesHV1_RptrVarHaut_ctl04_Label2", el => el.textContent.trim()),
        difference: await page.$eval("span#FrontTabContainer1_ctl00_Variation1_FrtesHV1_RptrVarHaut_ctl04_Label5>font", el => el.textContent.trim()),
        diff_percent: await page.$eval("span#FrontTabContainer1_ctl00_Variation1_FrtesHV1_RptrVarHaut_ctl04_Label4>font", el => el.textContent.trim())
      },
      {
        instrument: await page.$eval("span#FrontTabContainer1_ctl00_Variation1_FrtesHV1_RptrVarHaut_ctl05_Label1", el => el.textContent.trim()),
        cours: await page.$eval("span#FrontTabContainer1_ctl00_Variation1_FrtesHV1_RptrVarHaut_ctl05_Label2", el => el.textContent.trim()),
        difference: await page.$eval("span#FrontTabContainer1_ctl00_Variation1_FrtesHV1_RptrVarHaut_ctl05_Label3>font", el => el.textContent.trim()),
        diff_percent: await page.$eval("span#FrontTabContainer1_ctl00_Variation1_FrtesHV1_RptrVarHaut_ctl05_Label4>font", el => el.textContent.trim())
      }
    ];
    const pfB = [
      {
  
        instrument: await page.$eval("span#FrontTabContainer1_ctl00_Variation1_FrtesBV1_RptrVarHaut_ctl01_Label1", el => el.textContent.trim()),
        cours: await page.$eval("span#FrontTabContainer1_ctl00_Variation1_FrtesBV1_RptrVarHaut_ctl01_Label2", el => el.textContent.trim()),
        difference: await page.$eval("span#FrontTabContainer1_ctl00_Variation1_FrtesBV1_RptrVarHaut_ctl01_Label3>font", el => el.textContent.trim()),
        diff_percent: await page.$eval("span#FrontTabContainer1_ctl00_Variation1_FrtesBV1_RptrVarHaut_ctl01_Label4>font", el => el.textContent.trim())
      },
      {
        instrument: await page.$eval("span#FrontTabContainer1_ctl00_Variation1_FrtesBV1_RptrVarHaut_ctl02_Label1", el => el.textContent.trim()),
        cours: await page.$eval("span#FrontTabContainer1_ctl00_Variation1_FrtesBV1_RptrVarHaut_ctl02_Label2", el => el.textContent.trim()),
        difference: await page.$eval("span#FrontTabContainer1_ctl00_Variation1_FrtesBV1_RptrVarHaut_ctl02_Label5>font", el => el.textContent.trim()),
        diff_percent: await page.$eval("span#FrontTabContainer1_ctl00_Variation1_FrtesBV1_RptrVarHaut_ctl02_Label4>font", el => el.textContent.trim())
      },
      {
        instrument: await page.$eval("span#FrontTabContainer1_ctl00_Variation1_FrtesBV1_RptrVarHaut_ctl03_Label1", el => el.textContent.trim()),
        cours: await page.$eval("span#FrontTabContainer1_ctl00_Variation1_FrtesBV1_RptrVarHaut_ctl03_Label2", el => el.textContent.trim()),
        difference: await page.$eval("span#FrontTabContainer1_ctl00_Variation1_FrtesBV1_RptrVarHaut_ctl03_Label3>font", el => el.textContent.trim()),
        diff_percent: await page.$eval("span#FrontTabContainer1_ctl00_Variation1_FrtesBV1_RptrVarHaut_ctl03_Label4>font", el => el.textContent.trim())
      },
      {
        instrument: await page.$eval("span#FrontTabContainer1_ctl00_Variation1_FrtesBV1_RptrVarHaut_ctl04_Label1", el => el.textContent.trim()),
        cours: await page.$eval("span#FrontTabContainer1_ctl00_Variation1_FrtesBV1_RptrVarHaut_ctl04_Label2", el => el.textContent.trim()),
        difference: await page.$eval("span#FrontTabContainer1_ctl00_Variation1_FrtesBV1_RptrVarHaut_ctl04_Label5>font", el => el.textContent.trim()),
        diff_percent: await page.$eval("span#FrontTabContainer1_ctl00_Variation1_FrtesBV1_RptrVarHaut_ctl04_Label4>font", el => el.textContent.trim())
      },
      {
        instrument: await page.$eval("span#FrontTabContainer1_ctl00_Variation1_FrtesBV1_RptrVarHaut_ctl05_Label1", el => el.textContent.trim()),
        cours: await page.$eval("span#FrontTabContainer1_ctl00_Variation1_FrtesBV1_RptrVarHaut_ctl05_Label2", el => el.textContent.trim()),
        difference: await page.$eval("span#FrontTabContainer1_ctl00_Variation1_FrtesBV1_RptrVarHaut_ctl05_Label3>font", el => el.textContent.trim()),
        diff_percent: await page.$eval("span#FrontTabContainer1_ctl00_Variation1_FrtesBV1_RptrVarHaut_ctl05_Label4>font", el => el.textContent.trim())
      }
    ];
    await page.click("input#FrontTabContainer1_ctl00_ImageButton3");
    await page.waitForSelector("span#FrontTabContainer1_ctl00_Volume1_LBTOtal");
    const VG = await page.$eval("span#FrontTabContainer1_ctl00_Volume1_LBTOtal", el => el.textContent.trim());
    const Ins = [
      {
        name: await page.$eval("span#FrontTabContainer1_ctl00_Volume1_ValeurPlusActives1_RptrValActives_ctl01_Label6", el => el.textContent.trim()),
        Valeur: await page.$eval("span#FrontTabContainer1_ctl00_Volume1_ValeurPlusActives1_RptrValActives_ctl01_Label8", el => el.textContent.trim()),
      },
      {
        name: await page.$eval("span#FrontTabContainer1_ctl00_Volume1_ValeurPlusActives1_RptrValActives_ctl02_Label6", el => el.textContent.trim()),
        Valeur: await page.$eval("span#FrontTabContainer1_ctl00_Volume1_ValeurPlusActives1_RptrValActives_ctl02_Label8", el => el.textContent.trim()),
      },
      {
        name: await page.$eval("span#FrontTabContainer1_ctl00_Volume1_ValeurPlusActives1_RptrValActives_ctl03_Label6", el => el.textContent.trim()),
        Valeur: await page.$eval("span#FrontTabContainer1_ctl00_Volume1_ValeurPlusActives1_RptrValActives_ctl03_Label8", el => el.textContent.trim()),
      },
      {
        name: await page.$eval("span#FrontTabContainer1_ctl00_Volume1_ValeurPlusActives1_RptrValActives_ctl04_Label6", el => el.textContent.trim()),
        Valeur: await page.$eval("span#FrontTabContainer1_ctl00_Volume1_ValeurPlusActives1_RptrValActives_ctl04_Label8", el => el.textContent.trim()),
      },
      {
        name: await page.$eval("span#FrontTabContainer1_ctl00_Volume1_ValeurPlusActives1_RptrValActives_ctl05_Label6", el => el.textContent.trim()),
        Valeur: await page.$eval("span#FrontTabContainer1_ctl00_Volume1_ValeurPlusActives1_RptrValActives_ctl05_Label8", el => el.textContent.trim()),
      },
      {
        name: await page.$eval("span#FrontTabContainer1_ctl00_Volume1_ValeurPlusActives1_RptrValActives_ctl06_Label6", el => el.textContent.trim()),
        Valeur: await page.$eval("span#FrontTabContainer1_ctl00_Volume1_ValeurPlusActives1_RptrValActives_ctl06_Label8", el => el.textContent.trim()),
      },
      {
        name: await page.$eval("span#FrontTabContainer1_ctl00_Volume1_ValeurPlusActives1_RptrValActives_ctl07_Label6", el => el.textContent.trim()),
        Valeur: await page.$eval("span#FrontTabContainer1_ctl00_Volume1_ValeurPlusActives1_RptrValActives_ctl07_Label8", el => el.textContent.trim()),
      },
      {
        name: await page.$eval("span#FrontTabContainer1_ctl00_Volume1_ValeurPlusActives1_RptrValActives_ctl08_Label6", el => el.textContent.trim()),
        Valeur: await page.$eval("span#FrontTabContainer1_ctl00_Volume1_ValeurPlusActives1_RptrValActives_ctl08_Label8", el => el.textContent.trim()),
      },
      {
        name: await page.$eval("span#FrontTabContainer1_ctl00_Volume1_ValeurPlusActives1_RptrValActives_ctl09_Label6", el => el.textContent.trim()),
        Valeur: await page.$eval("span#FrontTabContainer1_ctl00_Volume1_ValeurPlusActives1_RptrValActives_ctl09_Label8", el => el.textContent.trim()),
      },
      {
        name: await page.$eval("span#FrontTabContainer1_ctl00_Volume1_ValeurPlusActives1_RptrValActives_ctl10_Label6", el => el.textContent.trim()),
        Valeur: await page.$eval("span#FrontTabContainer1_ctl00_Volume1_ValeurPlusActives1_RptrValActives_ctl10_Label8", el => el.textContent.trim()),
      }
    ];
    await page.click("input#FrontTabContainer1_ctl00_ImageButton4");
    await page.waitForSelector("span#FrontTabContainer1_ctl00_Capitalisation1_LBCapitalisation");
    const CapG = await page.$eval("span#FrontTabContainer1_ctl00_Capitalisation1_LBCapitalisation", el => el.textContent.trim());
    const Cap = [
      {
        name: await page.$eval("span#FrontTabContainer1_ctl00_Capitalisation1_CinqMeilleurCapital1_RptrBestCapit_ctl01_Label6", el => el.textContent.trim()),
        Valeur: await page.$eval("span#FrontTabContainer1_ctl00_Capitalisation1_CinqMeilleurCapital1_RptrBestCapit_ctl01_Label8", el => el.textContent.trim()),
      },
      {
        name: await page.$eval("span#FrontTabContainer1_ctl00_Capitalisation1_CinqMeilleurCapital1_RptrBestCapit_ctl02_Label6", el => el.textContent.trim()),
        Valeur: await page.$eval("span#FrontTabContainer1_ctl00_Capitalisation1_CinqMeilleurCapital1_RptrBestCapit_ctl02_Label8", el => el.textContent.trim()),
      },
      {
        name: await page.$eval("span#FrontTabContainer1_ctl00_Capitalisation1_CinqMeilleurCapital1_RptrBestCapit_ctl03_Label6", el => el.textContent.trim()),
        Valeur: await page.$eval("span#FrontTabContainer1_ctl00_Capitalisation1_CinqMeilleurCapital1_RptrBestCapit_ctl03_Label8", el => el.textContent.trim()),
      },
      {
        name: await page.$eval("span#FrontTabContainer1_ctl00_Capitalisation1_CinqMeilleurCapital1_RptrBestCapit_ctl04_Label6", el => el.textContent.trim()),
        Valeur: await page.$eval("span#FrontTabContainer1_ctl00_Capitalisation1_CinqMeilleurCapital1_RptrBestCapit_ctl04_Label8", el => el.textContent.trim()),
      },
      {
        name: await page.$eval("span#FrontTabContainer1_ctl00_Capitalisation1_CinqMeilleurCapital1_RptrBestCapit_ctl05_Label6", el => el.textContent.trim()),
        Valeur: await page.$eval("span#FrontTabContainer1_ctl00_Capitalisation1_CinqMeilleurCapital1_RptrBestCapit_ctl05_Label8", el => el.textContent.trim()),
      },
      {
        name: await page.$eval("span#FrontTabContainer1_ctl00_Capitalisation1_CinqMeilleurCapital1_RptrBestCapit_ctl06_Label6", el => el.textContent.trim()),
        Valeur: await page.$eval("span#FrontTabContainer1_ctl00_Capitalisation1_CinqMeilleurCapital1_RptrBestCapit_ctl06_Label8", el => el.textContent.trim()),
      },
      {
        name: await page.$eval("span#FrontTabContainer1_ctl00_Capitalisation1_CinqMeilleurCapital1_RptrBestCapit_ctl07_Label6", el => el.textContent.trim()),
        Valeur: await page.$eval("span#FrontTabContainer1_ctl00_Capitalisation1_CinqMeilleurCapital1_RptrBestCapit_ctl07_Label8", el => el.textContent.trim()),
      },
      {
        name: await page.$eval("span#FrontTabContainer1_ctl00_Capitalisation1_CinqMeilleurCapital1_RptrBestCapit_ctl08_Label6", el => el.textContent.trim()),
        Valeur: await page.$eval("span#FrontTabContainer1_ctl00_Capitalisation1_CinqMeilleurCapital1_RptrBestCapit_ctl08_Label8", el => el.textContent.trim()),
      },
      {
        name: await page.$eval("span#FrontTabContainer1_ctl00_Capitalisation1_CinqMeilleurCapital1_RptrBestCapit_ctl09_Label6", el => el.textContent.trim()),
        Valeur: await page.$eval("span#FrontTabContainer1_ctl00_Capitalisation1_CinqMeilleurCapital1_RptrBestCapit_ctl09_Label8", el => el.textContent.trim()),
      },
      {
        name: await page.$eval("span#FrontTabContainer1_ctl00_Capitalisation1_CinqMeilleurCapital1_RptrBestCapit_ctl10_Label6", el => el.textContent.trim()),
        Valeur: await page.$eval("span#FrontTabContainer1_ctl00_Capitalisation1_CinqMeilleurCapital1_RptrBestCapit_ctl10_Label8", el => el.textContent.trim()),
      }
    ];
    const artFinal = await '{"indices":' + JSON.stringify(indices) + ',"variations":{"pfhausses": ' + JSON.stringify(pfH) + ',"pfbaisses":' + JSON.stringify(pfB) + '},"Volume": {"volume global":' + JSON.stringify(VG) + ',"Instruments":' + JSON.stringify(Ins) + '},"Capitalisation": {"Capitalisation en MAD":' + JSON.stringify(CapG) + ',"Capitalisations":' + JSON.stringify(Cap) + '}}';
    const filename = await "result.json";
    await fs.writeFileSync(filename, artFinal);
    await browser.close();
    console.log("Done scraping")
    setTimeout(loop, 900000);
  };
  loop();


;
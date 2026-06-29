import { HTMLMOV } from './HTMLMOV.js';
let btn = document.getElementById("sub_btn");
btn.onclick = function () {
    psychrolib.SetUnitSystem(psychrolib.SI);
    let t = HTMLMOV.get_num("sub_t"); // 乾球温度
    let WetBulb = HTMLMOV.get_num("sub_WetBulb"); // 湿球温度
    let Pressure = 101325;
    let [h, Dew, RelHumCalc, VapPres, ent, vol, degSat] = psychrolib.CalcPsychrometricsFromTWetBulb(t, WetBulb, Pressure);
    let enta = ent / 1000; // kJ/kgに変換
    let RHa = RelHumCalc * 100; // %に変換
    HTMLMOV.set_num("sub_RHa", Number(RHa.toFixed(1)));
    HTMLMOV.set_num("sub_h", Number(h.toFixed(4)));
    HTMLMOV.set_num("sub_Dew", Number(Dew.toFixed(1)));
    HTMLMOV.set_num("sub_enta", Number(enta.toFixed(1)));
    HTMLMOV.set_num("sub_VapPres", Number(VapPres.toFixed(1)));
};
/* テスト
console.log("乾球温度：", t, "℃");
console.log("湿球温度：", WetBulb, "℃");
console.log("相対湿度:", RHa, "%");
console.log("絶対湿度:", h, "kg/kg");
console.log("露点温度:", Dew, "℃");
console.log("エンタルピ:", enta, "kJ/kg");
console.log("水蒸気圧:", VapPres, "Pa");
*/

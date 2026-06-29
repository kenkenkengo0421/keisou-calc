import { HTMLMOV } from './HTMLMOV.js';
let btn = document.getElementById("btn");
btn.onclick = function () {
    psychrolib.SetUnitSystem(psychrolib.SI);
    // 入力値
    let t = HTMLMOV.get_num("main_t"); // 乾球温度
    let RHa = HTMLMOV.get_num("main_RHa"); // 相対湿度(%)
    let RH = RHa / 100; // 計算用(0.0〜1.0)
    let Pressure = 101325;
    let [h, WetBulb, Dew, VapPres, ent, vol, degSat] = psychrolib.CalcPsychrometricsFromRelHum(t, RH, Pressure);
    // エンタルピをkJ/kg
    let enta = ent / 1000;
    HTMLMOV.set_num("main_h", Number(h.toFixed(4)));
    HTMLMOV.set_num("main_WetBulb", Number(WetBulb.toFixed(1)));
    HTMLMOV.set_num("main_Dew", Number(Dew.toFixed(1)));
    HTMLMOV.set_num("main_enta", Number(enta.toFixed(1)));
    HTMLMOV.set_num("main_VapPres", Number(VapPres.toFixed(1)));
};
/*テスト
console.log("乾球温度：", t, "℃");
console.log("相対湿度：", RHa, "%");

console.log("絶対湿度:", h, "kg/kg");
console.log("湿球温度:", WetBulb, "℃"); // 追加
console.log("露点温度:", Dew, "℃");
console.log("エンタルピ:", enta, "kJ/kg");
console.log("水蒸気圧:", VapPres, "Pa");
*/

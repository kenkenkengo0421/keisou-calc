// @ts-ignore
import psychrolib from 'psychrolib';
psychrolib.SetUnitSystem(psychrolib.SI);
// 入力値（※湿球温度は乾球温度以下にします）
let t = 50; // 乾球温度
let WetBulb = 38.7; // 湿球温度
let Pressure = 101325;
// ★湿球温度から一括計算！
// （配列の2番目が相対湿度になります）
let [h, Dew, RelHumCalc, VapPres, ent, vol, degSat] = psychrolib.CalcPsychrometricsFromTWetBulb(t, WetBulb, Pressure);
// 単位の調整
let enta = ent / 1000; // kJ/kgに変換
let RHa = RelHumCalc * 100; // %に変換
// 結果の確認
console.log("乾球温度：", t, "℃");
console.log("湿球温度（入力値）：", WetBulb, "℃");
console.log("相対湿度:", RHa, "%");
console.log("絶対湿度:", h, "kg/kg");
console.log("露点温度:", Dew, "℃");
console.log("エンタルピ:", enta, "kJ/kg");
console.log("水蒸気圧:", VapPres, "Pa");

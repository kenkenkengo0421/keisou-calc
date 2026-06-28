// @ts-ignore
import psychrolib from 'psychrolib';

psychrolib.SetUnitSystem(psychrolib.SI);

let t: number = 50;         // 乾球温度
let WetBulb: number = 38.7;   // 湿球温度
let Pressure: number = 101325;

let [h, Dew, RelHumCalc, VapPres, ent, vol, degSat] = psychrolib.CalcPsychrometricsFromTWetBulb(t, WetBulb, Pressure);

let enta: number = ent / 1000;      // kJ/kgに変換
let RHa: number = RelHumCalc * 100; // %に変換

// テスト
console.log("乾球温度：", t, "℃");
console.log("湿球温度：", WetBulb, "℃");
console.log("相対湿度:", RHa, "%");
console.log("絶対湿度:", h, "kg/kg");
console.log("露点温度:", Dew, "℃");
console.log("エンタルピ:", enta, "kJ/kg");
console.log("水蒸気圧:", VapPres, "Pa");

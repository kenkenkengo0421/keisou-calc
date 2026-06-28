// @ts-ignore
import psychrolib from 'psychrolib';
//ASHRAE（米国暖房冷凍空調学会）基準値

psychrolib.SetUnitSystem(psychrolib.SI);
let t: number = 30; //乾球温度
let RHa: number = 50; //相対湿度
let RH: number = 0;
let sikkyu: number = 12; //湿球温度 

RH = RHa * 0.01;
let Pressure: number = 101325;

let Dew: number = psychrolib.GetTDewPointFromRelHum(t, RH);//露点温度=乾球_相対
let RH1: number = psychrolib.GetRelHumFromTWetBulb(t, sikkyu, Pressure); //相対湿度＝乾球_湿球_気圧 
let RH1a: number = RH1 * 100;
let Dew_1: number = psychrolib.GetTDewPointFromTWetBulb(t, sikkyu, Pressure);
let h: number = psychrolib.GetHumRatioFromRelHum(t, RH, Pressure);
let ent: number = psychrolib.GetMoistAirEnthalpy(t, h);
let enta: number = ent / 1000;



//テスト
console.log("乾球温度：", t, "℃")
console.log("湿球温度：", sikkyu, "℃")
console.log("相対湿度：", RHa, "%")
console.log("気圧：", Pressure, "Pa")

console.log('露点温度1:', Dew, "℃  ※露点1=乾球_相対")
console.log("露点温度2:", Dew_1,"℃　※　露点2=乾球温度_湿球温度")
console.log("相対湿度:", RH1a, "%  ※相対湿度＝乾球_湿球" )
console.log("絶対湿度:", h, "kg/kg ※絶対湿度=乾球_相対")
console.log("エンタルピ:", enta, "※ エンタルピ=乾球温度_湿度比(絶対湿度)")

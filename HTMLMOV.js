//import { HTMLMOV } from './HTMLMOV'.js;
//  npx http-server でtestしないとエラー
export class HTMLMOV {
    //number型
    static get_num(in_id) {
        return parseFloat(document.getElementById(in_id).value);
    }
    //HTMLMOV.get_num("<htmlのid>");    HTMLのidの値を取得する
    static set_num(out_id, num) {
        document.getElementById(out_id).innerText = num.toString();
    }
    //HTMLMOV.set_num("<htmlのid>", <変数名>);     HTMLのidに値を設定する
    //string型
    static get_str(in_id) {
        return document.getElementById(in_id).value;
    }
    //HTMLMOV.get_str("<htmlのid>");    HTMLのidの値（文字列）を取得する
    static set_str(out_id, text) {
        document.getElementById(out_id).innerText = text;
    }
}

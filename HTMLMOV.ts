//import { HTMLMOV } from './HTMLMOV'.js;
//  npx http-server でtestしないとエラー

export class HTMLMOV {
  //number型
  static get_num(in_id: string): number {
    return parseFloat((document.getElementById(in_id) as HTMLInputElement).value);
  }
    //HTMLMOV.get_num("<htmlのid>");    HTMLのidの値を取得する

  static set_num(out_id: string, num: number): void {
    (document.getElementById(out_id) as HTMLElement).innerText = num.toString();
  }
    //HTMLMOV.set_num("<htmlのid>", <変数名>);     HTMLのidに値を設定する


    //string型
  static get_str(in_id: string): string {
    return (document.getElementById(in_id) as HTMLInputElement).value;
  }
    //HTMLMOV.get_str("<htmlのid>");    HTMLのidの値（文字列）を取得する

  static set_str(out_id: string, text: string): void {
    (document.getElementById(out_id) as HTMLElement).innerText = text;
  }
    // HTMLMOV.set_str("<htmlのid>", <変数名>)     HTMLのidに文字列を設定する
}

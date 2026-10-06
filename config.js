// 溶解日報アプリの設定
// syncUrl: Apps Script を「ウェブアプリ」としてデプロイしたときの URL (…/exec)
// token  : Code.gs の TOKEN と同じ合言葉
// adminPin: アプリの「設定」で製造条件の規格を変更するときのパスワード(必ず変更してください)
// spec   : 規格の初期値。アプリの「設定」で保存した規格があればそちらが優先されます。
window.SUNA_CONFIG = {
  syncUrl: "https://script.google.com/macros/s/AKfycbwY_XoO4pl8zVCDETy-DlQlGxAyQbxOH18sIIZoSQxRMD5Zbrjy7Tx5gy4ZjFKCfGML2w/exec",
  adminPin: "0726",
  token: "OWHKxlWeao3gjTQS",
  spec: {
    FC200: {
      ce:   {min: null, max: null},   // CE
      c:    {min: null, max: null},   // C
      si:   {min: null, max: null},   // Si
      temp: {min: null, max: null}    // 出湯温度(℃)
    },
    FC250: {
      ce:   {min: null, max: null},
      c:    {min: null, max: null},
      si:   {min: null, max: null},
      temp: {min: null, max: null}
    }
  }
};

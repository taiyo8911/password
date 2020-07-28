function random() {
  //使用する文字の定義
  var str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  //桁数の定義
  const len = document.getElementById("len").value;

  //ランダムな文字列の生成
  var password = "";
  for (var i = 0; i < len; i++) {
    password += str.charAt(Math.floor(Math.random() * str.length));
  }

  //変数passwordの値を、resultというidを持った要素に代入
  document.getElementById('result').textContent = password;
}

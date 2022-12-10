"use strict";

// パスワードに使用する文字を定義
const LOWER_CASE = "abcdefghijklmnopqrstuvwxyz"; // 小文字
const UPPER_CASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // 大文字
const NUMBER = "0123456789"; // 数字
const SYMBOL = "!&?+"; // 記号

// 最終的にパスワードに使用する文字を格納する
let string;

// チェックボックスの値が変化した時に使用する文字の種類を決定する
let targets = document.querySelectorAll(`input[type='checkbox'][name='item']`);
for (let target of targets) {
  target.addEventListener('change', function () {
    if (targets[0].checked && targets[1].checked && targets[2].checked && targets[3].checked) {
      string = LOWER_CASE + UPPER_CASE + NUMBER + SYMBOL;
    } else if (targets[0].checked && targets[1].checked && targets[2].checked) {
      string = LOWER_CASE + UPPER_CASE + NUMBER;
    } else if (targets[0].checked && targets[1].checked && targets[3].checked) {
      string = LOWER_CASE + UPPER_CASE + SYMBOL;
    } else if (targets[0].checked && targets[2].checked && targets[3].checked) {
      string = LOWER_CASE + NUMBER + SYMBOL;
    } else if (targets[1].checked && targets[2].checked && targets[3].checked) {
      string = UPPER_CASE + NUMBER + SYMBOL;
    } else if (targets[0].checked && targets[1].checked) {
      string = LOWER_CASE + UPPER_CASE;
    } else if (targets[0].checked && targets[2].checked) {
      string = LOWER_CASE + NUMBER
    } else if (targets[0].checked && targets[3].checked) {
      string = LOWER_CASE + SYMBOL;
    } else if (targets[1].checked && targets[2].checked) {
      string = UPPER_CASE + NUMBER;
    } else if (targets[1].checked && targets[3].checked) {
      string = UPPER_CASE + SYMBOL;
    } else if (targets[2].checked && targets[3].checked) {
      string = NUMBER + SYMBOL;
    } else if (targets[0].checked) {
      string = LOWER_CASE;
    } else if (targets[1].checked) {
      string = UPPER_CASE;
    } else if (targets[2].checked) {
      string = NUMBER;
    } else if (targets[3].checked) {
      string = SYMBOL;
    } else {
      string = "";
    }
  });
}


// submitが押されたらパスワードを生成して表示する
function random() {
  // 使用する文字の種類が選択されていない場合
  if (!string) {
    alert("使用する文字の種類を選んでください。");
  } else {
    // 桁数を取得する
    const LENGTH = document.getElementById("length").value;
    // ランダムな文字列を作成する
    let password = "";
    for (let i = 0; i < LENGTH; i++) {
      // 指定位置の文字を取得する
      password += string.charAt(Math.floor(Math.random() * string.length));
    }
    // HTMLで表示する
    document.getElementById('output').innerText = password;
  }
}
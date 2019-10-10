let hacked = document.createElement("span");
hacked.setAttribute("style", "font-size:2rem;font-weight:bold;color:darkred;padding:4px 8px;border-radius:12px;border:solid 4px darkred;");
hacked.innerHTML = "Hacked";
document.body.style.backgroundColor = "#1d303a";
document.getElementById("header-left").append(hacked);
document.getElementById("header-bar").style.filter = "invert(1)";
console.log('Chrome拡張の疎通確認コードが動いています。動作確認ができたら削除してください。');
document.title = "Hacked " + document.title;

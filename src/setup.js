let hacked = document.createElement("span");
hacked.setAttribute("style",
  "font-size:1.75rem;font-weight:bold;color:darkred;padding:4px 8px;border-radius:12px;border:solid 4px darkred;");
hacked.innerHTML = "Hacked";
document.getElementById("header-left").append(hacked);

document.getElementById("header-left").style.width = "50%";
document.getElementById("header-right").style.width = "50%";

document.body.style.backgroundColor = "#1d303a";
document.getElementById("header-bar").style.filter = "invert(1)";
console.log('Chrome拡張の疎通確認コードが動いています。動作確認ができたら削除してください。');
document.title = "Hacked " + document.title;

let selector = document.createElement("span");
selector.setAttribute("style",
  "width:100px;font-size:1.75rem;font-weight:bold;color:black;padding:4px 8px;border-radius:12px;border:solid 4px black;margin-left:15px;");
selector.innerHTML = '<label for="speed">Speed</label><select name="speed" id="speed-selector"><option value="2">500</option><option value="5">200</option><option value="10">100</option><option value="20">50</option></select>';
document.getElementById("header-left").append(selector);

let display = document.createElement("span");
display.setAttribute("id", "type-display");
display.setAttribute("style",
  "width:100px;font-size:1.75rem;font-weight:bold;color:black;padding:4px 8px;border-radius:12px;border:solid 4px black;margin-left:15px;");
display.innerHTML = "Typed: ?";
document.getElementById("header-left").append(display);

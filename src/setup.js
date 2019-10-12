// "Hacked" mark
let hacked = document.createElement("span");
hacked.setAttribute("style",
  "font-size: 1.75rem;\
  vertical-align: top;\
  font-weight: bold;\
  color: darkred;\
  padding: 4px 8px;\
  border-radius: 12px;\
  border: solid 4px darkred;");
hacked.innerHTML = "Hacked";
document.getElementById("header-left").append(hacked);

// header LR elements width
document.getElementById("header-left").style.width = "75%";
document.getElementById("header-right").style.width = "25%";

// change title and background color
document.body.style.backgroundColor = "#1d303a";
document.getElementById("header-bar").style.filter = "invert(1)";
console.log('このSFC-TypingはHackされています。');
document.title = "Hacked " + document.title;

// Speed Selector
let speedSelector = document.createElement("span");
speedSelector.setAttribute("style",
  "width: 100px;\
  vertical-align: top;\
  font-size: 1.75rem;\
  font-weight: bold;\
  color: black;\
  padding: 4px 8px;\
  border-radius: 12px;\
  border: solid 4px black;\
  margin-left: 15px;");
speedSelector.innerHTML = 
  '<label for="speed">Speed</label>\
  <select name="speed" id="speed-selector" style="vertical-align:top;">\
  <option value="10">100</option>\
  <option value="20">50</option>\
  <option value="200">5</option>\
  <option value="5">200</option>\
  <option value="2">500</option>\
  </select>';
document.getElementById("header-left").append(speedSelector);

// error rate selector
let errorRate = document.createElement("span");
errorRate.setAttribute("style",
  "width:100px;\
  vertical-align: top;\
  font-size:1.75rem;\
  font-weight:bold;\
  color:black;\
  padding:4px 8px;\
  border-radius:12px;\
  border:solid 4px black;\
  margin-left:15px;");
errorRate.innerHTML =
  '<label for="error">Error Rate</label>\
    <select name="error" id="error-rate" style="vertical-align:top;">\
    <option value="0">0</option>\
    <option value="0.005">0.5%</option>\
    <option value="0.01">1%</option>\
    <option value="0.05">5%</option>\
  </select>';
document.getElementById("header-left").append(errorRate);

// real time typed key display
let display = document.createElement("span");
display.setAttribute("id", "type-display");
display.setAttribute("style",
  "width: 85px;\
  display: inline-block;\
  margin-top: -4px;\
  font-size: 1.75rem;\
  font-weight: bold;\
  color: black;\
  padding: 4px 8px;\
  border-radius: 12px;\
  border: solid 4px black;\
  margin-left: 15px;");
display.innerHTML = "key: ?";
document.getElementById("header-left").append(display);

// message display
let msg = document.createElement("span");
msg.setAttribute("id", "msg-display");
msg.setAttribute("style",
  "display: inline-block;\
  margin-top: -4px;\
  font-size: 1.75rem;\
  font-weight: bold;\
  color: cyan;\
  padding: 4px 8px;\
  margin-left: 15px;");
msg.innerHTML = "";
document.getElementById("header-left").append(msg);

// after game
document.getElementById("after-game-div").firstElementChild.style.color = "white";
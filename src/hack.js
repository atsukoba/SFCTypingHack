let c = {
  " ":32, "0":48, "1":49, "2":50, "3":51, "4":52, "5":53, "6":54, "7":55, "8":56, "9":57,
  "a":65, "b":66, "c":67, "d":68, "e":69, "f":70, "g":71, "h":72, "i":73, "j":74, "k":75,
  "l":76, "m":77, "n":78, "o":79, "p":80, "q":81, "r":82, "s":83, "t":84, "u":85, "v":86,
  "w":87, "x":88, "y":89, "z":90, "-":189, "^":186, "¥":0, "@":219, "[":219, ";":186,
  ":":186, "]":221, ",":188, ".":190, "/":191, "_":189, "A":365, "B":366, "C":367,
  "D":368, "E":369, "F":370, "G":371, "H":372, "I":373, "J":374, "K":375, "L":376,
  "M":377, "N":378, "O":379, "P":380, "Q":381, "R":382, "S":383, "T":384, "U":385,
  "V":386, "W":387, "X":388, "Y":389, "Z":390, "!":349,'"':355, "#":351, "$":352,
  "%":353, "&":354, "'":355, "(":356, ")":357, "=":489, "~":487, "|":300, "`":487,
  "{":519, "+":489, "*":355, "}":521, "<":488, ">":490, "?":491
};

let i = 0;

$("#practice-start-button").click(() => {
  console.log("Autotyper started");
  let speed = Number(document.getElementById("speed-selector").value);
  console.log(`Speed: ${speed}`);
  setInterval(() => {
    k = document.getElementById(`word${i}`);
    if (k != null) {
      key = k.innerHTML;
      console.log(`Typed: ${key}`);
      document.getElementById(`type-display`).innerText = `Typed: ${key} `;
      document.dispatchEvent(
        new KeyboardEvent("keydown", {keyCode: c[key]})
      );
      i++;
    }
  }, speed);
});

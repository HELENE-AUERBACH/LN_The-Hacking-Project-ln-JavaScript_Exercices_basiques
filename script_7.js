const getBotAnswerStr = function(inputStr) {
  let botAnswerStr = "";
  if (inputStr && (inputStr.slice(inputStr.length - 1, inputStr.length) == "?")) {
    botAnswerStr = "Ouais Ouais...";
  } else if (inputStr && inputStr.trim() && (inputStr.trim().toUpperCase() == inputStr.trim())) {
    botAnswerStr = "Pwa, calme-toi...";
  } else if (inputStr && (inputStr.indexOf("Fortnite") != -1)) {
    botAnswerStr = "on s' fait une partie soum-soum ?";
  } else if (!inputStr) {
    botAnswerStr = "t'es en PLS ?";
  } else {
    botAnswerStr = "balek.";
  }
  return botAnswerStr;
}
let inputStr = prompt("Que veux-tu me dire, à moi le bot adolescent ?");
console.log(getBotAnswerStr(inputStr));

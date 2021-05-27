let number2Str = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
if (Number.isNaN(parseInt(number2Str)) || parseInt(number2Str) < 1 || parseInt(number2Str) > 25) {
  console.log("Vous n'avez pas saisi un nombre d'étages pour la pyramide compris entre 1 et 25.");
} else { // l'utilisateur a rentré un nombre compris entre 1 et 25 (par exemple 5)
  let number2 = parseInt(number2Str);
  console.log(`Tu as demandé une pyramide de ${number2} étage(s) :`);
  let resultStr = "";
  for (let countFloor = 0; countFloor < number2; countFloor++) {
    let j = countFloor + 1;
    let i = number2 - countFloor - 1;
    for (let count = 0; count < i; count++) {
      resultStr += " ";
    }
    for (let count = 0; count < j; count++) {
      resultStr += "#";
    }
    resultStr += "\n";
  }
  console.log(`${resultStr}`);
}

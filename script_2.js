// Un prompt s'affiche avec la question suivante
let numberStr = prompt("De quel nombre veux-tu calculer la factorielle ?");
//console.log(numberStr);
console.log(parseInt(numberStr));
if (Number.isNaN(parseInt(numberStr)) || parseInt(numberStr) < 0) {
  console.log("Vous n'avez pas saisi un nombre positif ou égal à 0.");
} else { // l'utilisateur a rentré un nombre (par exemple 4)
  let number = parseInt(numberStr);
  let factorial = 1;
  while (number > 0) {
    factorial *= number;
    //console.log(factorial);
    number--;
  }
  console.log(`Tu as demandé la factorielle de : ${numberStr}`);
  // Dans la console le résultat suivant est affiché
  console.log(`Le résultat est : ${factorial}`);
}

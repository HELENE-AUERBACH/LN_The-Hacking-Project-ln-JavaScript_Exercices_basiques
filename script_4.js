const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];
let bornInto70YearsArray = new Array();
let firstAndLastNamesArray = new Array();
let currentAgesArray = new Array();
for (let index1 in entrepreneurs) {
  for (let entrepreneurAttribut in entrepreneurs[index1]) {
    if (   entrepreneurAttribut == "year"
	&& entrepreneurs[index1][entrepreneurAttribut] >= 1970
	&& entrepreneurs[index1][entrepreneurAttribut] < 1980) {
      bornInto70YearsArray.push(entrepreneurs[index1]);
    }
  }
  firstAndLastNamesArray.push(`{firstName: ${entrepreneurs[index1]["first"]}, lastName: ${entrepreneurs[index1]["last"]}}`);
  currentAgesArray.push(`${entrepreneurs[index1]["first"]} ${entrepreneurs[index1]["last"]} aurait aujourd'hui ${2021 - entrepreneurs[index1]["year"]} an(s)`);
}
console.log("Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 :");
console.log(bornInto70YearsArray);
console.log("Sors une array qui contient le prénom et le nom des entrepreneurs :");
console.log(firstAndLastNamesArray);
console.log("Quel âge aurait chaque inventeur aujourd'hui ?");
console.log(currentAgesArray);
console.log("Trie les entrepreneurs par ordre alphabétique du nom de famille : ");
let entrepreneursSortedArray = entrepreneurs.sort(function(left, right) {
  var lastNameOrder = left.last.localeCompare(right.last);
  var firstNameOrder = left.first.localeCompare(right.first);
  return lastNameOrder || firstNameOrder;
});
console.log(entrepreneursSortedArray);

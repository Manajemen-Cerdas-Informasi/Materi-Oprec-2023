console.log("Daijin : Hi Suzume");

let time = 2000;
setTimeout(function () {
  if (time > 1000) console.log("Suzume : I hate Daijin");
  else console.log("Suzume : Hi Daijin");
}, time);

console.log(
  `Daijin : Suzume is not like me if she doesn't response me in a second`
);
// Output :
// Daijin : Hi Suzume
// Daijin : Suzume is not like me if she doesn't response me in a second
// Suzume : I hate Daijin

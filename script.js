var myTab = ['JS', 'PHP', 'HTML', 'CSS', 'NODEJS', 'JAVA', 'LARAVEL'];
//console.log(myTab);
//
//var iterator = 0;
for (var iterator = 0; iterator <myTab.length; iterator++){
  console.log(iterator+'+'+myTab[iterator]);
}
for(let i in myTab){
  console.log(i + ':' + myTab[i]);
}
for(let e of myTab){
  console.log(e)
}
function helloWorld() {
  console.log('Hello World');
}
helloWorld();

function helloWorldWithArg(arg) {
  console.log('Hello World '+arg);
}
helloWorldWithArg(' Argument ');

function maSomme(a, b){
  return a + b;
}
console.log(maSomme(5,12));

var helloWorldAsVar = function (){
  console.log('Hello World as Var');
}
helloWorldAsVar();

var helloWorldAsVarWithArg = function (arg){
  console.log('Hello World as Var ' + arg);
}
helloWorldAsVarWithArg(' Argument ');

(function (){
  console.log('Hello World Anonyme');
})();

(function (arg){
  console.log('Hello World Anonyme ' + arg);
})(' Argument ');
/*
var maDate = new Date();
console.log(maDate.getFullYear());
var monAge = prompt('Quel est votre age ?')
console.log(monAge);

function myDOB(a, b){
  return a - b
}
console.log(myDOB(maDate.getFullYear(),monAge));
*/
var chain = prompt('Message inversé');
var chainln = '';
for (var i = chain.length-1; i >= 0; i--){
  chainln = chainln + chain[i];

}
console.log(chainln);

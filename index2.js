let winsCount = prompt('Informe a quantidade de vitórias: ');
let defCount = prompt('Informe a quantidade de derrotas: ');
parseInt(winsCount, defCount);

let result;
let baseCalc = rankCalc();

function rankCalc() {
  result = winsCount - defCount;
  return result
}


rankCalc();
  
if(result <= 10){
  result = 'Ferro'
}else if(result = 11 & 20){
  result = 'Bronze'
}else if(result = 21 & 50){
  result = 'Prata'
}else if (result = 51 & 80){
  result = 'Ouro'
}else if(result = 81 & 90){
  result = 'Diamante'
}else if (result = 91 & 100){
  result = 'Lendário'
}else if(result >= 101){
  result = 'Imortal'
}


console.log(`O Herói tem de saldo de ${baseCalc} está no nível de ${result}`)
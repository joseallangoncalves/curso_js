
function consumo( temp, vel){
    return (temp * vel)/12;
}



console.log('entrada 1: ', 10);
console.log('entrada 2: ', 85);
console.log('saida: ', consumo( 10, 85).toFixed(3));


console.log('entrada 1: ', 2);
console.log('entrada 2: ', 92);
console.log('saida: ', consumo( 2, 92).toFixed(3));

console.log('entrada 1: ', 10);
console.log('entrada 2: ', 85);
console.log('saida: ', consumo( 22, 67).toFixed(3));
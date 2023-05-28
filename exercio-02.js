const quantidade = 6;

function numerosImpares(valor){
    let i =0;

    while (i < quantidade){
        if((valor % 2)==1){
            i++;
            console.log(valor)
        }
        valor++;
    }
}

console.log('Entrada: ', 9);

console.log('Saída:');
numerosImpares(9);
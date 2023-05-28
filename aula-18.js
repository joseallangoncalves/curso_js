

function calcular(valor){
    if(valor === 0){
        throw new Error('Não pode ser 0');
    }
    return valor / 2;
}

try{
    let resultado = calcular(50);
    console.log('resultado :', resultado);
}catch (error){
    console.log(error.message);
}finally{
    console.log('Sistema finalizado');
}
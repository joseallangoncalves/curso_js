const lista = [
    {
        nome: 'José Allan',
        idade: 42
    },
    {
        nome: 'Gabriella',
        idade: 45
    },
    {
        nome: 'Geovanna',
        idade: 22
    },
    {
        nome: 'Allana',
        idade: 18
    },
    {
        nome: 'João Lucas',
        idade: 5
    }
];


//for(let i = 0; i < lista.length; i++){
//    console.log(lista[i]);
//}

lista.forEach((objeto) => console.log(objeto));

let soma = 0;

lista.forEach((objeto) => {
    soma = soma + objeto.idade
});

console.log('soma idade= ', soma);
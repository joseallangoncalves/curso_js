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

//console.log(lista);

console.log(lista.map((objeto)=>objeto.nome));

//tem a mesma funcionalidade
//console.log(lista.map(converterObjeto));

//é o mesmo exemplo do map
const converterObjeto = (objeto) =>{
    return objeto.nome
}



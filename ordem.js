const usuarios = [
    {nome: "Carlos", idade: 32},
    {nome: "Ana", idade: 28},
    {nome: "Felipe", idade: 40},
];

//encontrando um objeto
const ana = usuarios.find(usuarios => usuarios.nome ==="ana");
console.log(ana);

//Filtrando objetos
const usuariosAcimaDe30 = usuarios.filter(usuario => usuarioç.idade > 30);
console.log(usuariosAcimaDe30);

//Ordenando objetos por idade
const usuariosOrdenadosPorIdade = usuarios.sort((a, b) => a.idade - b.idade);
console.log(usuariosOrdenadosPorIdade);

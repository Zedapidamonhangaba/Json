const clientes = require("./clientes.json");

function encontrar(lista, chave, valor){
    return lista.find((item)=> item[chave]=== valor);
}

const encontrado = encontrado = encontrar (clientes, "nome", "Kirby");

console.log(encontrado);

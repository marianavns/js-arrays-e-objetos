let listagem = ['arroz', 'feijão', 'macarrão', 'nutella']
let ultimoElemento = listagem.pop()
console.log(ultimoElemento)

let niveis = [10, 300, 82, 105, 5400]
let ultimoNivel = niveis.pop()
console.log(ultimoNivel)

let pessoas = [
    {
        name: "Mariana",
        age: 29,
        food: "chocolate"
    },
    {
        name: "Carlos",
        age: 73,
        food: "salada"
    },
    {
        name: "Helena",
        age: 85,
        food: "chocolate"
    }
]

let ultimaPessoa = pessoas.pop()
let newPessoas = pessoas
console.log(ultimaPessoa)
console.log(newPessoas)
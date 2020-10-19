let escreve = (frase) => console.log(frase)
let escreveInicio = (frase) => { 
    console.log(`\n ${frase}`)
}

const responsavel = "Mariana"

const idades = [29, 73, 85, 90]

const pessoas = [
    {
        name: "Mariana",
        age: 29,
        food: "chocolate"
    },
    {
        name: "Carlos",
        age: 73,
        food: "salad"
    },
    {
        name: "Helena",
        age: 85,
        food: "chocolate"
    },
    {
        name: "Agenor",
        age: 90,
        food: "não cadastrado"
    }
]

const atualizacao = [
    {
        food: "fruits",
        drink: "water"
    }
]


// #1 Coloque o nome da responsável todo em letras maiúsculas:

    // let maiusculas = responsavel.toUpperCase()
    // console.log(maiusculas)

// #2 Filtre as idades dos idosos na lista - criando um Array e Criando um Objeto:

    // let idadesDosIdosos = idades.filter(element => (element > 60))

            /*
            O que faz o FILTER?
            - Percorre uma array procurando elementos que atendem a tal condição. 
            - Se encontrar, joga o elemento numa array nova.  
            */

    // escreveInicio(`Estes são os filters para idades maiores que 60:`)
    // escreve('Este abaixo retorna uma array naturalmente porque saiu de uma array:')
    // escreve(idadesDosIdosos)
    // escreve(`Já este retorna um objeto porque eu configurei assim.`)
    // escreve({idadesDosIdosos})

    
// #3 Filtre as pessoas que não tem a comida cadastrada:

    // let noFood = pessoas.filter(objeto => objeto.food == "não cadastrado")
    // escreveInicio(`Este é o filter para pessoas sem comida cadastrada:`)
    // escreve(noFood)


// #4 Crie uma array com o nome das comidas:  

    // let allFoodsArray = pessoas.map(objeto => objeto.food)
    // escreveInicio(`Este é o map que retorna array apenas com os valores nas chaves "food":`)
    // escreve(allFoodsArray)

            /* 
            O que faz o MAP?
            - Percorre uma array rodando uma função em cada elemento. 
            - Devolve uma array nova com esses elementos depois da função.
            */

// # Crie uma array de objetos com o nome das comidas: 

// Não dá para fazer { "chocolat", "salad", "chocolat" }. Isso não é um objeto. Objeto precisa de chave e valor.

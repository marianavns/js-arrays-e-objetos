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
        food: "salada"
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
    },
    {
        name: "Enzo",
        age: 5,
        food: "maçã"
    }
]

const atualizacao = [
    {
        food: "frutas",
        drink: "água"
    }
]


// #1 Coloque o nome da responsável todo em letras maiúsculas:

    let maiusculas = responsavel.toUpperCase()
    escreveInicio(`#1: Tudo maiúsculo:`)
    escreve(maiusculas)

// #2 Filtre as idades dos idosos na lista criando uma Array. 

    // Método 1 - Usando o for:
    // let idadesDosIdosos = []
    // for (i=0; i<=idades.length; i++) {
    //     if (idades[i]>60){
    //         idadesDosIdosos.push(idades[i])
    //     }
    // }

    // Método 2 - Filter + "function declaration", ou declaração de função, aquela mais usada: 
    // let idadesDosIdosos = idades.filter(function verificaIdades(element){
    //     if (element > 60) { 
    //         return element
    //     }
    // })

    // Método 3 - Filter + Arrow Function:
    let idadesDosIdosos = idades.filter(element => (element > 60))

            /*
            O que faz o FILTER?
            - Percorre uma array procurando elementos que atendem a tal condição. 
            - Se encontrar, joga o elemento numa array nova.  
            */
    escreveInicio(`#2.1 - Idades dos Idosos:`)
    escreve(idadesDosIdosos)

    // Criando um Objeto:
    escreveInicio(`#2.2 - Objeto Idades dos Idosos:`)
    escreve({idadesDosIdosos})

    
// #3 Filtre as pessoas que não tem a comida cadastrada:

    let noFood = pessoas.filter(objeto => objeto.food == "não cadastrado")
    escreveInicio(`#3 - Pessoas com comida não cadastrada:`)
    escreve(noFood)

// #4 Houve um erro de cadastro! Aumente um ano em cada idade na array de idades:

    let novasIdades = idades.map(element => (element + 1))
    escreveInicio(`#4 - Aumentando em 1 ano todas as idades:`)
    escreve(novasIdades)

// #5 Crie uma array com o nome das comidas:  

    let allFoodsArray = pessoas.map(objeto => objeto.food)
    escreveInicio(`#5 - Array com comidas cadastradas na chave .food:`)
    escreve(allFoodsArray)

            /* 
            O que faz o MAP?
            - Percorre uma array rodando uma função em cada elemento. 
            - Devolve uma array nova com esses elementos depois da função.
            */


// #6 Crie uma array APENAS com o nome das comidas (retire o que estiver como não cadastrado):

    // Primeiro Passo: Deixar apenas as pessoas que tem uma comida registrada no campo "food":
    // let comComidaCadastrada = pessoas.filter(element => (element.food != "não cadastrado"))
    // escreveInicio(`#6 - Primeiro Passo`)
    // escreve(comComidaCadastrada)

    // Segundo passo: retirar apenas os valores que estão na chave "food":
    // let apenasComidas = comComidaCadastrada.map(element => (element.food))
    // escreveInicio(`#6 - Segundo Passo`)
    // escreve(apenasComidas)

    // Juntando os dois:
    let apenasComidas = pessoas
    .filter (element => (element.food != "não cadastrado"))
    .map(element => (element.food))

    escreveInicio(`#6 - Devolvendo apenas nomes de comidas usando filter e map:`)
    escreve(apenasComidas)

// #7 Retire o Enzo da lista de pessoas:

let ultimoElemento = pessoas.pop()
escreveInicio(`#7 - Retirando o último elemento`)
escreve(pessoas)
escreve(ultimoElemento)

// #7 Crie uma array de objetos com o nome das comidas: 

    // Não dá para fazer { "chocolat", "salad", "chocolat" }. Isso não é um objeto. Objeto precisa de chave e valor.



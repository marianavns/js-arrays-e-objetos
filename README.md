
# Reprograma Semana 4 - Arrays e Objetos <h1>

## Como cada um se parece

![arrayeobjeto](https://i.ibb.co/p4VVmCQ/reprograma-s4-array-e-objeto.png)

Arrays armazenam listas. Objetos armazenam elementos simples, mas com várias características.
[Arrays usam chaves]. {Objetos usam colchetes}.



# Arrays <h1>

## Primeiros Passos com Arrays <h2>
Array é um arranjo, uma matriz. As arrays do JavaScript aceitam dados mistos, dá pra colocar dados de diferentes tipos lá - números, strings, conjuntos chave-valor... E lembre-se: o primeiro índice da array é sempre 0.
```js
let arrayExemplo = ["mariana", 29, ["recife", "jaboatao", "sao paulo"], {curso: "backend", instituicao: "reprograma"
}]
```

### Fazendo verificações via arrays <h3>
```js
const cpf = [072, 200, 684, 5, 0]
console.log(cpf[0] === "072") //false, pois você tá comparando um número com uma string.
console.log(cpf[0] === 072) // true, pois agora sim você está comparando dois números.
```
### Como "puxar" apenas um item da array? <h3>
```js
const cpf = [072, 200, 684, 5, 0]
console.log(cpf[3]) // "índice 3 do CPF" ou "CPF índice 3"
//resultado no terminal: 684

const nome = "mariana"
console.log(nome[2]) // terminal: "r" - String é uma array de caracteres!
```

Outra forma é fazendo uma operação matemática dentro dos colchetes:
```js
const cpf = [072, 200, 684, 5, 0]
console.log(cpf[90-88]) 
//resultado no terminal: 684
```
### Para saber quantos elementos têm na Array <h3>
```js
const cpf = [072, 200, 684, 5, 0]
console.log(cpf.length)
//resultado no terminal: 5
```


## Como construir uma Array <h2>
```js
const novaArray = []
novaArray[0] = "banana"
novaArray[1] = 2
novaArray[2] = true

console.log(novaArray)
```
É possível adicionar item numa array vazia, mas também numa array já existente. É só ATRIBUIR VALOR ÀQUELE ÍNDICE: nomeDaArray[indice] = valorASerIncluido. Se você usar um índice que já está preenchido na array, *ele será substituído*.

## Array junto com o for <h2>
É possível imprimir na tela todos os itens da array em linhas separadas, índice por índice, com a ajuda do for:
```js
// Declarando a Array
    const paraFazer = ["Estudar", "Assistir vídeo", "Pesquisar Cursos"]
//Função
    function tempo(arr){
    for (i = 0; i < arr.length; i++){
        console.log(`índice: ${i} - tarefa:  ${arr[i]}`)
        }
    }
//Chamando a função
    tempo(paraFazer)
```

## Métodos de Array <h2>
### Introdução <h3>
Há formas já preparadas para fazer algumas coisas nas arrays, como empurrar fatores para dentro, tirar fatores e imprimir em tela, e muitos outros. Usamos assim: **"nomeDaArray.metodo"**.

Site com todos os métodos: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array

**Atenção aqui:**
para agregar e retirar elementos: *push, pop, shift, unshift, slice, splice e concat.*
para buscar elementos dentro da array: *indexOf, lastIndexOf, includes, find, findIndex e filter.*
para transformar arrays: map, reduce, *sort, reverse, split e join.*

Abaixo, quatro deles:
### Para colocar ou retirar elementos de uma array<h3>
#### Como empurrar coisas para uma array: arr.push(oQueEuQueroIncluir) <h4>
Aqui é possível "empurrar" mais um participante para a array, sendo ele o último.
```js
const femaleRappers = ['Elliot', 'Hill', 'Minaj']
console.log(femaleRappers) // terminal: ['Elliot', 'Hill', 'Minaj']

femaleRappers.push('Thee Stalion')
console.log(femaleRappers) // terminal: ['Elliot', 'Hill', 'Minaj', 'Thee Stalion']
```
Outra forma de fazer isso, como já foi visto, é apenas escrever femaleRappers[3]='Thee Stalion' e ela será incluída por último na array. Mas, para isso, seria necessário já saber o tamanho da array para incluir na última posição e não correr o risco de substituir quem já estava dentro.
#### Como extrair o último item de uma array: arr.pop() <h4>
Arranca o último item de uma array.
```js
const trueSingers = ['Knowles', 'Houston', 'Keys', 'Spears']
console.log(trueSingers) // terminal: ['Knowles', 'Houston', 'Keys', 'Spears']
console.log(`Retiramos a ${trueSingers.pop()} da lista de cantoras`)
console.log(trueSingers) // terminal: ['Knowles', 'Houston', 'Keys']
```
### Para Buscar Elementos dentro de uma array <h3> 
#### Como achar um elemento numa array (sabendo seu índice): arr.indexOf(oQueEstouProcurando) <h4>
Retorna qual o índice do que estou procurando. Se não estiver na array, aparece -1.
```js
const coresPreferidas = ['lilas', 'azul', 'rosa', 'branco']
console.log(coresPreferidas.indexOf(azul)) // terminal: 1
console.log(coresPreferidas.indexOf(branco)) // terminal: 3
console.log(coresPreferidas.indexOf(verde)) // terminal: -1
```
### Para Transformar arrays <h3>
#### Como dividir uma palavra ou número (uma array) e transformar em várias arrays: arr.split() <h4>
```js
const divideString = (entrada) => {
    let arrayString = entrada.split('')
    return arrayString
}
```
#### Como inverter a ordem dos itens de uma array: arr.reverse() <h4>
```js
const inverteString = (precisaSerEmFormatoStringComColchetes) => {
    let arrayInvertida = precisaSerEmFormatoStringComColchetes.reverse()
    console.log(arrayInvertida)
}

inverteString([2, 3, 4, 5]) // terminal: [5, 4, 3, 2]
```







# Objetos <h1>

## Estrutura Básica de Objeto <h2>
Os objetos são, tenta lembrar assim, como grandes matrizes. Essa é a estrutura básica dos objetos:
```js
const pessoa1 = {
    fname: 'Mariana', // conjunto chave-valor
    age: '29',
    lname: 'Souza',
    cities: ['Recife', 'Jaboatao', 'Sao Paulo'],
}
```

## Manipulando as informações dentro dos objetos <h2>
### Introdução <h3>
Para localizar informações de um objeto, podemos fazer isso de duas formas. Afinal, essa é a função dos objetos: permitir que as informações sejam guardadas, acessadas e disponibilizadas.

Lembra que em array usamos o índice para achar algo? Em objetos, usamos uma string chamada *chave*.
### Puxando as Informações do Objeto <h3>
#### Notação de Ponto <h4>
sintaxe: **nomeDoObjeto**.*aChaveQueVocêQuer*
```js
console.log(`O nome da pessoa no objeto é ${pessoa1.fname}`)
```
#### Notação de Colchetes <h4>
sintaxe: **nomeDoObjeto***['aChaveQueVocêQuer']['indiceDoQueVocêQuer']*

Esse caso é melhor que o de cima, pois permite variáveis! Isso pode trazer muitas variações!
```js
                                            //nome do objeto['aChaveQueVocêQuer']['indiceDoQueVocêQuer']
console.log(`Uma das cidades que a ${pessoa1['fname']} esteve é ${pessoa1['cities'][2]}`)
```
### Empurrando informações no Objeto <h3>

É bem parecido com empurrar na array, só que um pouquinho mais simples!
```js
const pessoa2 = {}
console.log(pessoa2) // terminal: {}
pessoa2['name'] = "Leonardo"
pessoa2['age'] = 35
pessoa2['lname'] = "Vieira"
console.log(pessoa2) // terminal: { name: 'Leonardo', age: 35, lname: 'Vieira' }
```
Ou seja, as chaves são uma grande tela em branco em que podemos colocar qualquer informação, desde que sigamos a sintaxe certa, que é *nomeDoObjeto['chave']=valor*: a **chave nome** que o objeto pessoa2 recebeu foi o **valor Leonardo**. 

## Criando um objeto via função <h2>
sintaxe: 
*função (parametros) {*
    *let nomeObjeto = {*
        *primeiroQueAparece: parametro1*
        *segundoQueAparece: parametro2*
    }
*return nomeDoObjeto*
*}*

```js
function criaObjeto(title, pages) {
      let objLivro = {
        titulo: title,
        paginas: pages,
        }
return objLivro
}
console.log(criaObjeto('Antes do Baile Verde', 234, 'Lygia'))
```

Ou se os nomes que aparecem também são os nomes dos parametros:

```js
function criaObjeto(nome, idade){
    let objeto = {
        nome,
        idade,
    }
return objeto
}
console.log(criaObjeto("Mariana", 29))
```

## Encontrando informações dentro do objeto com map <h2>
### Como o map trabalha <h3>
O map pega um objeto e retorna um outro objeto novinho, mas com as características que você pediu. Vamos começar com um exemplo mais simples, com uma array.

```js
let arrayBase = [1, 10, 100] // terminal: [1, 10, 100]
let arrayNova = arrayBase.map(parametro => 2*parametro) // terminal: [2, 20, 200]
//arraynova  = arraybase .map (como era na antiga => como quero que fique na nova)
```

O map é uma forma mais rápida e elegante de fazer isso:
```js
let arrayBase = [1, 10, 100]
let arrayNova = []
for (i = 0; i < arrayBase.length; i++){
    arrayNova.push(arrayBase[i]*2)
}
console.log(arrayNova)
```
Entendeu o que aconteceu? O Map, com a ajuda da função entre parênteses, transformou cada elemento da array antiga nele mesmo multiplicado por 2 e criou uma array nova.
### Map com objetos <h3>

```js
const objeto = {
        nome: 'Mariana',
        sobrenome: 'Vieira',
        contatos: {
            pessoa1: "Iasmin",
            pessoa2: "Leonardo",
        }
}

const objetoNovo = objeto.map(objeto => objeto.pessoa2)
```

# Observações Gerais <h1>
*Saiba o que tem guardado dentro de cada variável.*
*Uma comparação sempre retorna "true" ou "false":*
*Saiba o que tem guardado dentro de cada variável*
console.log(`índice: ${i} - tarefa:  ${arr[i]}`)


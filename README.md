
# Reprograma Semana 4 - Arrays e Objetos



1. [Dando uma Espiada Como Cada Um Se Parece](#Dando-Uma-Espiada-Como-Cada-um-Se-parece)

2. [Conceitos Introdutórios](#Conceitos-Introdutórios)

    2.1 [Propriedades](#Propriedades)

    2.2 [Métodos](#Métodos)

3. [Arrays Parte 1 Introdução](#Arrays)

    3.1 [Estrutura Básica de Uma Array](#Estrutura-Básica-de-Uma-Array)

    3.2 [Como Criar uma Array](#Como-Criar-Uma-Array)

    3.3 [Como Editar uma Array](#Como-Editar-Uma-Array)

4. [Arrays Parte 2 Explorando os Elementos da Array](#Arrays-Parte-2-Explorando-os-Elementos-da-Array)

    4.1 [Conhecendo Quantos Elementos Tem na Array](#Conhecendo-Quantos-Elementos-Tem-na-Array)

    4.2 [Mostrando Apenas Um Elemento da Array](#Mostrando-Apenas-Um-Elemento-da-Array)

    4.3 [Imprimindo os Elementos da Array em Linhas Separadas](#Imprimindo-os-Elementos-da-Array-em-Linhas=Separadas)

5. [Arrays Parte 3 Métodos de Array](#Arrays-Parte-3-Métodos-de-Array)

# Dando uma Espiada Como Cada Um Se Parece

![Homem vindo do teto amarrado pela cintura espiando o notebook](https://i.imgur.com/foCucGB.gif)

```js
let array = [
    'equipamento', 
    'móvel', 
    'ferramenta'
]

let objeto = {
    equipamento: 'computador',
    móvel: 'mesa',
    ferramenta: 'alicate'
}
```

Arrays armazenam elementos. Objetos armazenam conjuntos chave-valor.
[Arrays usam colchetes]. {Objetos usam chaves}.


# Conceitos Introdutórios

Antes de entrar na conversa sobre arrays e objetos, é necessário conhecer algumas ferramentas usadas em tipos primitivos que servem para descrevê-los, mas que também são muito úteis na manipulação de arrays e objetos.

## Propriedades

> Guarde no coração: Todos os valores JS possuem propriedades, sejam strings, números, arrays, objetos... exceto *null* e *undefined*.

As propriedades são as características de algum valor. Por exemplo, quando escrevemos: 

```js
let computador = "computador"
console.log(computador.length)
```
ou </br>

```js
console.log(computador['length'])
```

estamos querendo saber qual o tamanho da string *"computador"*, que foi guardada na variável `computador`. O retorno no console, então, será `10`, pois computador tem 10 letras.

Ou seja: 
- computador *.length*: propriedade do tipo primitivo string "computador".

## Métodos

Já os métodos sempre **fazem** alguma coisa. Seja colocar uma string em maiúsculo, retirar o último item de uma lista (array) ou filtrar um conjunto de informações (objetos). Existe sempre uma ação envolvida.

# Arrays Parte 1 Introdução

![ilustração de homem segurando uma lista do tamanho dele](https://i.imgur.com/2jGKnWW.gif)

Array é uma lista de **elementos**. Cada elemento possui o seu **índice**, que é a posição que ele ocupa na array. Veja o exemplo:

`let minhaPrimeiraMatriz = ['doce', 'salgado', 'amargo']`

- *doce*, *salgado* e *amargo* são os **elementos** da array;
- *0*, *1* e *2* são os **índices** 
(e não *1*, *2* e *3* como poderíamos imaginar, pois **o primeiro índice da array é sempre 0**).

## Estrutura Básica de Uma Array

Como vimos, as arrays têm elementos e índices. Então assim fica a estrutura:

`[ elemento1 , elemento2, elemento3, ...]`

É importante destacar que, em JavaScript, as arrays aceitam qualquer tipo de elemento - números, strings, conjuntos chave-valor (objetos), etc. Dessa forma, a array deixa aquele formato mais simples que vimos no último tópico. 

Veja um exemplo de array mais variada: 

```js
let arrayVariada = [
  "mariana", 
  29, 
  ["Recife", "Jaboatao", "São paulo"], 
  {curso: "backend", instituicao: "reprograma"}
]
```

## Como Criar uma Array

É possível fazer isso apenas escrevendo os itens no seu VSCode usando a estrutura vista anteriormente. A outra forma é "empurrando" cada elemento dentro de cada índice.

Olhe esse exemplo para entender melhor do que estamos falando:

```js
const novaArray = []
novaArray[0] = "banana"
novaArray[1] = "geleia"
novaArray[2] = true
```

1. Declaramos uma constante *novaArray*, que é uma array vazia;
2. Adicionamos *banana* no índice 0;
3. *geleia* no índice 1;
4. *true* no índice 2.

`// novaArray = ['banana', 'geleia', true]`

## Como editar uma array

Além de adicionar item numa array vazia, é possível adicionar também numa array já existente ou editar os elementos que já estão lá. É só *atribuir valor àquele índice*. Exemplo:

```js
const novaArray = ["banana", "geleia", true]
novaArray[0] = "maçã"
novaArray[3] = "marília"
novaArray[20] = "recife"

// novaArray = ["maçã", "geleia", true, "marília", <16 empty itens>, "recife"]
```

Ou seja: Se usar um índice que já está preenchido na array, ele será substituído. Se usar um que ainda não tem na array, ele será incluído.

# Arrays Parte 2 Explorando os Elementos da Array

## Conhecendo Quantos Elementos Tem na Array

```js
const papelaria = ['lápis', 'borracha', 'caneta']
console.log(papelaria.length)
// 3
```

## Mostrando Apenas um Elemento da Array

Tenha a array e referencie seu índice. Será mostrado o que está guardado naquele índice.

```js
const papelaria = ['lápis', 'borracha', 'caneta']
console.log(papelaria[2])
// 'caneta'
```
*"índice 2 de papelaria" ou "papelaria índice 2"*

```js
const nome = "mariana"
console.log(nome[95-93]) 
// "r" 
```
> Afinal **string é uma array de caracteres**!

## Imprimindo os Elementos da Array em Linhas Separadas

É possível imprimir na tela todos os itens da array em linhas separadas, índice por índice, com a ajuda do for:

```js
// Declarando a Array
    const tarefas = ["Estudar", "Assistir vídeo", "Pesquisar Cursos"]
//Função
    function imprimeTarefas(arr){
    for (i = 0; i < arr.length; i++){
        console.log(`índice: ${i} - tarefa:  ${arr[i]}`)
        }
    }
//Chamando a função
    imprimeTarefas(tarefas)
```

# Arrays Parte 3 Métodos de Array

Lembra que falamos lá no começo dos métodos? O que são os métodos? São formas de fazer coisas dentro de um array. Métodos sempre envolvem uma ação que vai mudar alguma coisa.

Os métodos e suas descrições está nesta ![planilha ainda em construção](https://docs.google.com/spreadsheets/d/1owj6p3P4QZXCcPmqNtQq-XBv1TlA6b_lCGKKWMO6_TI/edit?usp=sharing) e os exemplos dos usos está neste repositório com os nomes *metodo-NOMEDOMÉTODO-exercicios.js*.

Não se preocupe: métodos são coisas para se aprender à parte, dedicando vários dias e fazendo bastante exercício e merece um repositório só para eles, mas aqui vai um resuminho sobre os principais métodos e o que eles podem fazer por nós:

- Para agregar ou retirar elementos: push, pop, shift, unshift, slice, splice e concat.
- Para buscar elementos dentro da array: indexOf, lastIndexOf, includes, find, findIndex e filter.
- Para transformar arrays: map, reduce, sort, reverse, split e join.

Site com todos os métodos: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array


# Objetos -  Em edição

## Estrutura Básica de Objeto
Os objetos são conjuntos de chave-valor. Exemplo:

```js
const pessoa1 = {
    fname: 'Mariana', // conjunto chave-valor
    age: '29',
    lname: 'Souza',
    cities: ['Recife', 'Jaboatao', 'Sao Paulo'],
}
```

## Como criar um objeto
```js
const pessoa1 = {
    fname: 'Mariana', // conjunto chave-valor
    age: '29',
    lname: 'Souza',
    cities: ['Recife', 'Jaboatao', 'Sao Paulo'],
}
pessoa1.cor = 'lilás'
    console.log(pessoa1)
// {
  // fname: 'Mariana',
  // [...]
  // cities: [ 'Recife', 'Jaboatao', 'Sao Paulo' ],
  //cor: 'lilás'
//}
```

## Como criar um objeto via função
```js 
function criaObjeto (valor1, valor2) {
    let objeto = {                  // É preciso nomear esse "objeto". Pode ser "aluna", "pessoa"...
        nome: valor1,
        sobrenome: valor2,
    }
    return objeto
}
console.log(criaObjeto("Mariana", "Vieira"))
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

## Explorando os elementos do Objeto

Existem duas formas de saber qual o valor está dentro de cada chave de um objeto. 

### Notação de Ponto <h3>

sintaxe: **nomeDoObjeto**.*aChaveQueVocêQuer*
```js
console.log(`O nome da pessoa no objeto é ${pessoa1.fname}`)
```
É possível colocar vários pontos, caso o objeto tenha mais e mais objetos dentro dele. Exemplo:
```js
const televisao = {
    emissora: "globo",
    sedes: {
            atuacao: "Rio de Janeiro",
            jornalismo: {
                jornalismo1: "Amazonas",
                jornalismo2: {
                    subsede1: "Recife",
                    subsede2: "Caruaru",
                }    
            } 
    }
}
console.log(televisao.sedes.jornalismo.jornalismo2.subsede2) // Terminal: Caruaru
```

### Notação de Colchetes <h3>

sintaxe: **nomeDoObjeto***['aChaveQueVocêQuer']['indiceDoQueVocêQuer']*

Esse caso é melhor que o de cima, pois permite variáveis! Isso pode trazer muitas opções!
```js
                                            //nome do objeto['aChaveQueVocêQuer']['indiceDoQueVocêQuer']
console.log(`Uma das cidades que a ${pessoa1['fname']} esteve é ${pessoa1['cities'][2]}`)
```

: 




## Manipulando as informações dentro dos objetos <h2>
### Introdução <h3>
Para localizar informações de um objeto, podemos fazer isso de duas formas. Afinal, essa é a função dos objetos: permitir que as informações sejam guardadas, acessadas e disponibilizadas.

Lembra que em array usamos o índice para achar algo? Em objetos, usamos uma string chamada *chave*.
### Puxando as Informações do Objeto <h3>

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


## Propriedades e Métodos dos Objetos <h2>
### Adicionando uma propriedade num objeto com chaves <h3>
```js
let objeto = {
    nome: 'renata',
    idade: 30,
}
objeto['Cidade'] = 'Recife' // Adicionei mais uma propriedade (mais uma chave-valor) no objeto.

console.log(objeto)
// { Nome: 'Renata', Idade: 30, Cidade: 'Recife' }
```


## Propriedades, Métodos e Funções dos Não-Objetos (Strings, Números e Booleanos) <h2>
Importante: Strings, numbers e booleans não são objetos. Sendo assim, **não podemos atribuir propriedades a strings, numbers e booleans** como fizemos no tópico passado com os objetos. Exemplo:
```js
let pessoa = "Mariana"
pessoa.idade = 29 
// Tentando atribuir a idade para a string pessoa "Mariana"
console.log(pessoa.idade) 
// undefined
console.log(pessoa) 
// "Mariana". Nada foi acrescentado à string.
``` 

Mas, ainda assim, é possível "jogar" nas strings, numbers e booleans algumas propriedades, métodos e funções nativas que nos retornam valores como o tamanho da string, a string toda escrita em maiúsculo, o boolean (a resposta) se a entrada é um "não-número"... Exemplos:
```js
// length: propriedade 
// (associação entre chave e valor)
let nome = 'Mariana'
console.log("Essa propriedade retorna o tamanho da string: " + nome.length) // 7

// toUpperCase: método 
// (função que trabalha com string e recebe parâmetro)
console.log("Maiúsculo " + nome.toUpperCase(nome))

// push: método
[X] EXCLUSIVO DE OBJETOS [X]

// indexOf: método
let string = "Mariana"
console.log(string.indexOf("i"))

// isNan: função (função que trabalha com número)
let numero = 5848545
console.log('Essa propriedade retorna se a entrada é um "não-número" [' + isNaN(numero) + "]")
// false
```

# Observações Gerais <h1>
*Saiba o que tem guardado dentro de cada variável.*
*Uma comparação sempre retorna "true" ou "false":*
*Saiba o que tem guardado dentro de cada variável*
console.log(`índice: ${i} - tarefa:  ${arr[i]}`)


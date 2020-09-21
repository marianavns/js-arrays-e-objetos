// // DESAFIO - validador de cartão de crédito

// // Todos os números de cartão de crédito têm uma sequência que pode ser validada através de um algoritmo 
// // chamado Algoritmo de Luhn. Para validar qualquer número de cartão de crédito (o padrão de 16 dígitos), 
// // siga os seguintes passos:

// // 1. Retire o último dígito do número. Ele é o verificador;
// // 2. Escreva os números na ordem inversa;
// // 3. Multiplique os dígitos das casas ímpares por 2 e subtraia 9 de todos os resultados maiores que 9;
// // 4. Some todos os números;
// // 5. O dígito verificador (aquele do passo 1) é o número que você precisa somar a todos os outros números somados para fazer a validação;
// // 6. O número de cartão de crédito será válido caso o total (do passo 5) seja múltiplo de 10 (ou seja, numero % 10 === 0)


// // Números de cartões válidos para teste:

// // 5555666677778884
// // 5485755481460022
// // 5141331902596939 
// // 5381579886310193
// // 5261400319746371 

function validaNumero(numero) {

    let arrayCartao = numero.split('')
    let verificador = arrayCartao.pop()
    let arrayCartaoInversa = arrayCartao.reverse('')
    
    let mulDois = []
    let semAlteracao = []
                for (i = 0; i < arrayCartaoInversa.length; i++){
                        if ((i % 2 == 0)){
                        mulDois.push(arrayCartaoInversa[i]*2)
                        } else {
                            semAlteracao.push(parseInt(arrayCartaoInversa[i]))
                        }
                }
            
    let subNove = []
    let normal = []
            for (i = 0; i < mulDois.length; i++){
                if (mulDois[i] > 9){
                subNove.push(mulDois[i] - 9)
                } else {
                normal.push(mulDois[i])
                }
            }
    
    let totalSubNove = subNove.reduce((acumulador, numero, indice, original) => {
            return acumulador += numero;
            }, 0) 
        
    let totalNormal = normal.reduce((acumulador, numero, indice, original) => {
            return acumulador += numero;
            }, 0) 

    let totalSemAlteracao = semAlteracao.reduce((acumulador, numero, indice, original) => {
            return acumulador += numero;
            }, 0) 

       
    let totalComVerificador = parseInt(totalSubNove+totalNormal+totalSemAlteracao) + parseInt(verificador)
    
    if (totalComVerificador % 10 == 0){
                console.log("Cartão Válido")
            } else {
                console.log("Cartão Inválido")
            }
    } 
    
    validaNumero("5555666677778884")
    validaNumero("5485755481460022")
    validaNumero("5141331902596939")
    validaNumero("5381579886310193")
    validaNumero("5261400319746371")
    
///////////////////////

// DESAFIO - saudar clientes

// Escreva uma função chamada saudarCliente.
// Essa função deve receber um nome, verificar se ele existe na base de clientes e retornar uma saudação com base em quantas vezes a cliente visitou um estabelecimento. 
// Consulte o objeto baseClientes abaixo. A saudação deve ser diferente, dependendo do nome da reserva.

// Caso 1 - Cliente desconhecida (o nome não está presente no objeto baseClientes)
// console.log(saudarCliente('Chiquinha')) // --> 'Olá, é a primeira vez por aqui?'

// Caso 2 - Cliente que visitou apenas uma vez (o valor de 'visitas' é 1)
// console.log(saudarCliente('Clotilde')) // --> 'Bem-vinda, Clotilde! Que bom que voltou!'

// Caso 3 - Cliente repetida: (o valor de 'visitas' é maior que 1)
// console.log(saudarCliente('Florinda')) // --> 'Bem-vinda mais uma vez, Florinda!'

// Notas:
// Sua função não deve alterar o objeto baseClientes para atualizar o número de visitas.
// Não codifique os dados exatos da amostra. Esta é uma má ideia:
// if (nomeCliente === 'Maria') {
//   // etc
// }



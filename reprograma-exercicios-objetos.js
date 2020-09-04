// 1) Crie uma função que receba 3 parâmetros: o nome de um livro, a quantidade de páginas e a autoria. Retorne um objeto no formato: {titulo: "nome do livro", paginas: "número de páginas", autoria: "nome da pessoa"}

// Exemplo: 
// objLivro('Antes do Baile Verde', 234, 'Lygia Fagundes Telles') 

// retorna o objeto:
// {
//   titulo: 'Antes do Baile Verde', 
//   paginas: 234,
//   autoria: 'Lygia Fagundes Telles'
// }

function criaObjeto(title, pages, author) {
      let objLivro = {
        titulo: title,
        paginas: pages,
        autoria: author
      }
return objLivro
}
console.log(criaObjeto('As Aventuras de Huckleberry Finn', 366, 'Mark Twain'))


  // 2) Aproveite a função acima em outra função, que deve retornar a seguinte frase: 
  // "O livro XXXX foi escrito por XXX e tem XXX páginas". 
  // Você deve utilizar a função que já está pronta, e não reescrever a lógica dela dentro dessa nova função.

    function imprimeObjeto(title, pages, author) {
            let objLivro = {
              titulo: title,
              paginas: pages,
              autoria: author
            }
    return console.log(`O livro ${objLivro.titulo} foi escrito por ${objLivro.autoria} e tem ${objLivro.paginas} páginas.`)
    }
    imprimeObjeto('As Aventuras de Huckleberry Finn', 366, 'Mark Twain')

 
  // 3) Crie uma função que receba um objeto como o abaixo:
  
  // const pessoa = {
  //   nome: 'Nazaré',
  //   sobrenome: 'Tedesco',
  // }
  
  // Dado um objeto que tem uma propriedade 'nome' e uma propriedade 'sobrenome', a função deve retornar um novo objeto com as mesmas propriedades que o objeto recebido e mais uma propriedade, chamada 'nomeCompleto', cujo valor é uma string com o nome e sobrenome separados por um espaço.
  
  // Exemplo de retorno:
  // {
  //   nome: 'Nazaré',
  //   sobrenome: 'Tedesco',
  //   nomeCompleto: 'Nazaré Tedesco'
  // }

  function transformaObjeto (name, lname){
    let objPessoa = {
      nome: 'name',
      sobrenome: 'lname',
    }
    let fullName = `${objPessoa.nome} ${objPessoa.sobrenome}`
    return `${objPessoa.nome}, ${objPessoa.sobrenome}, fullName`
  }

  console.log(transformaObjeto("Nazaré", "Tedesco"))
  
  // 4) Crie uma função que receba o objeto abaixo e o nome de uma das chaves, e retorne a soma de todos os elementos do array que for selecionado através da chave.
  
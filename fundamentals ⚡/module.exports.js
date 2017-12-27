console.log(module); // observe tudo que existe dentro de 'module'

/**
 * 'exports' é um objeto que pertence à 'module' 
 * todo o arquivo é exportado quando usamos module.exports; 
 * então como se trata de um objeto, podemos criar novas propriedades:
 */

/*aqui eu crio a propriedade 'age' no objeto 'exports'
* isso significa que eu posso usar 'age' em qualquer outro arquivo
* quando eu fizer o require(); */
module.exports.age = 27;

// podemos exportar funções também!
module.exports.addNote = () => {
  console.log('yep');
  return 'new note'; 
};

/**
 * ☁ Em qualquer outro arquivo: ☁
 * 
 * const teste = require('./module.exports'); 
 * 
 * console.log(teste.age); // 27
 * 
 * console.log(teste.addNote());
 * // yep
 * // new note
 */
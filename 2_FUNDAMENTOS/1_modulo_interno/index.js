const meuModulo = require('./meu_modulo');

const resultado = meuModulo.soma; //quando preciso usar a função eu chamo apenas resultado, ao invez de sempre chamar "meuModulo.soma(2, 3);"

resultado(2, 3); // aqui chamo a função soma, que está dentro do meu modulo, e passo os parâmetros para ela.
resultado(5, 7);
resultado(10, 20);
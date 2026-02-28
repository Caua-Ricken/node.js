import chalk from 'chalk';
// trocar o type para "modeule" no package.json para usar o import 
// ou usar o require('chalk') para importar o chalk, mas tem que baixar o chalk@4.0.0 para usar o require

const nota = 2;

if(nota >= 7) {
    console.log(chalk.green('Parabéns, você foi aprovado!'));
} else if(nota >= 4) {
    console.log(chalk.yellow('Você está de recuperação!'));
} else {
    console.log(chalk.bgRed('Infelizmente, você foi reprovado!'));
}
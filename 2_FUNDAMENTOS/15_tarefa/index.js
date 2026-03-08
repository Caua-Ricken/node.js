import inquirer from 'inquirer';
import chalk from 'chalk';

/*
inquirer.prompt([{
    name: 'p1',
    message: 'qual a seu nome?'
},
{
    name: 'p2',
    message: 'qual a sua idade?'
}]).then((answers) => {

    if(!answers.p2 || !answers.p1) {
        throw new Error('Preencha os campos corretamente!');
    }
    console.log(chalk.bgYellow.black(`Olá ${answers.p1}, você tem ${answers.p2} anos!`));
}).catch((err) => {
    console.log(chalk.bgRed.white(err));
})
    */


const loop = async () => {

    try {
    const valor = await inquirer.prompt([{
        name: 'valor',
        message: 'digite o valor inicial:'
    }])

    let valorInicial = Number(valor.valor);

    while (valorInicial > 0) {
        const resposta = await inquirer.prompt([{
            name: 'valorDigitado',
            message: 'digite o valor do seu lanche:'
        }])

        let valorLanche = Number(resposta.valorDigitado);

        if (!valorLanche) {
            console.log(chalk.bgRed.white('Valor inválido! Digite um número.'));
            continue;
        }

        if (valorLanche > valorInicial) {
            console.log(chalk.bgRed.white('Saldo insuficiente!'));
            continue;
        } else {
            valorInicial -= valorLanche;
            console.log(chalk.bgGreen.white(`Lanche comprado! Saldo restante: ${valorInicial}`));
        }

        if (valorInicial === 0) {
            console.log(chalk.bgYellow.black('Saldo zerado!'));
        }
    }

    } catch (err) {
        console.log(chalk.bgRed.white('Erro: ',err));
    }
}

loop();
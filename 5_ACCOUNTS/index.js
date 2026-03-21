import inquirer from "inquirer";
import chalk from "chalk";

let users = [];

const system = async () => {

    let opcao;
   
    do {
        opcao = await inquirer.prompt([
        {
            name: "option",
            type: "list",
            message: "O que deseja fazer?",
            choices: [
                "Criar conta",
                "Deletar conta",
                "Consultar saldo",
                "Depositar",
                "Sacar",
                "Extras",
                "Sair"
            ]
        }
    ]);
       
    switch (opcao.option) {
        case "Criar conta":
           console.log(chalk.bgGreen.black("Parabéns por escolher nosso banco!"));
           console.log(chalk.green("vamos começar criando sua conta!"));
           const nomeDigitado = await inquirer.prompt([
            {
                name: "name",
                type: "input",
                message: "Digite o nome do titular da conta:"
            }
           ])
           console.log(chalk.green(`Bem-vindo, ${nomeDigitado.name}! Sua conta foi criada com sucesso!`));
           users.push({nome: nomeDigitado.name, saldo: 0});
           break; 

        case "Deletar conta":
            if (users.length === 0) {
                console.log(chalk.bgRed.white("Nenhuma conta encontrada. Por favor, crie uma conta primeiro."));
                break;
            } 

            const deletar = await inquirer.prompt([
                {
                    name: "usuario",
                    message: "Digite o nome do usuario que deseja deletar:"
                }
            ])

            const usuarioEncontrado = users.find((user) => user.nome === deletar.usuario);

            if (!usuarioEncontrado) {
                console.log(chalk.bgRed.white(`Usuario ${deletar.usuario} não encontrado!`));
            } else {
            users = users.filter((user) => user.nome !== deletar.usuario);
            console.log(chalk.bgGreen.white(`Usuario ${deletar.usuario} deletado com sucesso!`));
            }
            break;   

        case "Consultar saldo":
            if (users.length === 0) {
                console.log(chalk.bgRed.white("Nenhuma conta encontrada. Por favor, crie uma conta primeiro."));
                break;
            } 

            const userSaldo = await inquirer.prompt([
                {
                    name: "usuario",
                    message: "Digite o nome do usuario para consultar o saldo:"
                }
            ])

            const usuarioSaldo = users.find((user) => user.nome === userSaldo.usuario);

            if (!usuarioSaldo) {
                console.log(chalk.bgRed.white(`Usuario ${userSaldo.usuario} não encontrado!`));
            } else {
                console.log(chalk.bgRed.white(`O saldo do usuario ${usuarioSaldo.nome} é: R$${usuarioSaldo.saldo}`));
            }
            break;
            
         
        case "Depositar":
            if (users.length === 0) {
                console.log(chalk.bgRed.white("Nenhuma conta encontrada. Por favor, crie uma conta primeiro."));
                break;
            }    

            const userDeposito = await inquirer.prompt([
                {
                    name: "usuario",
                    message: "Digite o nome do usuario para realizar o deposito:"
                },
            ])

            const usuarioDeposito = users.find((user) => user.nome === userDeposito.usuario);

            if (!usuarioDeposito) {
                console.log(chalk.bgRed.white(`Usuario ${userDeposito.usuario} não encontrado!`));
                break;
            } 

            const valorDeposito = await inquirer.prompt([
                {
                    name: "valor",
                    message: "Digite o valor do deposito:"
                }
            ])

            usuarioDeposito.saldo += parseInt(valorDeposito.valor);
            console.log(chalk.bgGreen.white(`Deposito de R$${valorDeposito.valor} realizado com sucesso!`));
            break;

        case "Sacar":
            if (users.length === 0) {
                console.log(chalk.bgRed.white("Nenhuma conta encontrada. Por favor, crie uma conta primeiro."));
                break;
            }

            const userSaque = await inquirer.prompt([
                {
                    name: "usuario",
                    message: "Digite o nome do usuario para realizar o saque:"
                },
            ])

            const usuarioSaque = users.find((user) => user.nome === userSaque.usuario);

            if (!usuarioSaque) {
                console.log(chalk.bgRed.white(`Usuario ${userSaque.usuario} não encotrado!`));
                break;
            }

            const valorSaque = await inquirer.prompt([
                {
                    name: "valor",
                    message: "Digite o valor do saque:"
                }
            ])

            if (valorSaque.valor > usuarioSaque.saldo) {
                console.log(chalk.bgRed.white(`Saldo insuficiente!`))
            } else {
                usuarioSaque.saldo -= parseInt(valorSaque.valor);
                console.log(chalk.bgGreen.white(`Saque de R$${valorSaque.valor} realizado com sucesso!`));
            }

            break;

        case "Extras":
            if (users.length === 0) {
                console.log(chalk.bgRed.white("Nenhuma conta encontrada. Por favor, crie uma conta primeiro."));
                break;
            }
            console.log(`Usuarios cadastrados: ${users.map((user) => user.nome).join(", ")}`);
            console.log(`Quantidade de contas criadas: ${users.length}`);
            break;    
            
        case "Sair":
            console.log(chalk.blue("Obrigado por usar nosso sistema bancário! Até a próxima!"));
            break;
            
        default:
            console.log(chalk.bgRed.white("Opção invalida! Por favor, escolha uma opção valida."));
            break;    
    }

    } while (opcao.option !== "Sair");
}

system();
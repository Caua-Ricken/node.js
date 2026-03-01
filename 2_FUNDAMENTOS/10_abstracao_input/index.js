import inquirer from "inquirer";

inquirer.prompt([{
    name: 'pergunta1',
    message: 'qual a primeira nota?'
},
{
    name: 'pergunta2',
    message: 'qual a segunda nota?'
}]).then((answers) => {
    const media = (parseInt(answers.pergunta1) + parseInt(answers.pergunta2)) / 2;
    console.log(`a média é ${media}`); 
    console.log(answers)
}).catch((err) => console.log(err))
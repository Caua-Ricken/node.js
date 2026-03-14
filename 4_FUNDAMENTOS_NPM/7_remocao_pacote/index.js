import lodash from 'lodash';
import chalk from 'chalk';

const arr = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 6, 4, 9];


const diferenca = lodash.difference(arr, arr2);
console.log(chalk.red.bold(diferenca))


let array = [1, 2, 3, 4, 5];
array.sort((a, b) => b - a);
let segundoMaior = array[1]
console.log(chalk.blue.bold(segundoMaior))


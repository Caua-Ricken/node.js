import path from 'path';

const customPath = '/relatorio/caua/relatorio.pdf';

console.log(path.dirname(customPath)); // /relatorio/caua
console.log(path.basename(customPath)); // relatorio.pdf
console.log(path.extname(customPath)); // .pdf
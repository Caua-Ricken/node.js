import fs from 'fs'

if(!fs.existsSync('./minhapasta')) {
    console.log('não existe!')
    fs.mkdirSync('./minhapasta')
} else {
    fs.existsSync('./minhapasta')
    console.log('existe!')
}

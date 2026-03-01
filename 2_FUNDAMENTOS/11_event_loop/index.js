const a = () => {
    console.log('A executou');
}

const b = () => {
    console.log('B executou');
}

const c = () => {
    console.log('C executou');
    a();
    b();
}

c();
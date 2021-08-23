function tabela(n) {
    let x = [];
    for (let i = 1; i <= n; i++) {
        x[i]=[]
        for(let j = 1; j <= n; j++){
            x[i][j] = i*j;
        }
    }
    console.table(x)
}
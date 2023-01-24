function solution(arr1, arr2) {
    const LEN = arr2[0].length
    
    return arr1.map(v => {
    const tmp = []
    let i = 0;
    while (i < LEN) {
        tmp.push(v.reduce((p, v2, j) => p + v2*arr2[j][i], 0))
        i++;
    }
    return tmp
    })
}
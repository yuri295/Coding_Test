function solution(score) {
    let hap = score.map(v => v[0] + v[1])
    let array = hap.slice().sort((a,b) => b - a)
    return hap.map((v) => array.indexOf(v) + 1)
}
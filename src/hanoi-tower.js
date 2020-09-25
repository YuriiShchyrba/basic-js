
module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let res = [3];

    for (let i = 2, j = 0; i < disksNumber; i++ , j++) {
        let n = res[j] * 2 + 1;
        res.push(n);
    }
    let s = res[res.length - 1] * 3600 / turnsSpeed;
    s = Math.floor(s);
    return { turns: res[res.length - 1], seconds: s };
};

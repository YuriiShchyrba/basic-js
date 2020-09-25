



module.exports = function repeater(str, options) {
    let rT = options.repeatTimes === undefined ? 1 : options.repeatTimes;
    let s = options.separator === undefined ? '+' : options.separator;
    let a = options.addition === undefined ? '' : String(options.addition);
    let aRT = options.additionRepeatTimes === undefined ? 1 : options.additionRepeatTimes;
    let aS = options.additionSeparator === undefined ? '' : options.additionSeparator;
    let res = [];
    let hR = [];
    for (let i = 0; i < aRT; i++) {
        hR.push(a);
    }
    hR = hR.join(aS);
    str += hR;
    for (let i = 0; i < rT; i++) {
        res.push(str);
    }
    res = res.join(s);
    return res;


};
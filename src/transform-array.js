module.exports = function transform(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case '--double-next':
                if (i + 1 < arr.length) res.push(arr[i + 1]);
                break;
            case '--discard-prev':
                if (i != 0 && arr[i - 2] != '--discard-next') res.pop();
                break;
            case '--discard-next':
                i++;
                break;
            case '--double-prev':
                if (i != 0 && arr[i - 2] != '--discard-next') res.push(arr[i - 1]);
                break;
            default:
                if (arr[i] != undefined) res.push(arr[i]);
                break;
        }
    }
    return res;
};
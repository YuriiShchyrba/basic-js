module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let res = 1;
        let d = 1;
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                d += this.calculateDepth(arr[i]);
            }
            if (res < d) {
                res = d;
                d = 1;
            }
        }
        return res;
    }
};
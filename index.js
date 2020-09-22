class Matrix {
    /**
     * @param {number} r
     * @param {number} c
     * @param {number[]} [data]
     * */
    constructor(r, c, data) {
        data = data || [];
        c = c > 0 ? c : 1;
        r = r > 0 ? r : 1;
        /** @type {number[][]} */
        this.data = Array(r).fill(0)
            .map((_, y) => Array(c).fill(0)
                .map((_, x) => {
                    let res = data[y * c + x] || 0;
                    return res;
                }));
        this.r = r;
        this.c = c;
    }

    [Symbol.toPrimitive](hint) {
        if (hint === 'number')
            return this.data[0][0];
        return this.toString();
    }

    toString() {
        return this.data.join('\n');
    }

    reshape(r) {
        if (this.r * this.c % r !== 0) throw RangeError(`Can't reshape to ${r} rows`);
        let mat = new Matrix(r, this.r * this.c / r, this.data.flat());
        return mat;
    }
}

module.exports = Matrix;
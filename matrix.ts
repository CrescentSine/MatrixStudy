export default class Matrix<R extends number = 1, C extends number = 1> {
    #r: R;
    #c: C;
    #data: number[];

    constructor(r?: R, c?: C, data?: number[]) {
        r = r && r > 0 ? r : 1 as R;
        c = c && c > 0 ? c : 1 as C;
        this.#data = data ? data.concat() : [];
        this.#data.length = r * c;
        this.#r = r;
        this.#c = c;
    }

    get rows() {
        return this.#r;
    }

    get columns() {
        return this.#c;
    }

    val(x: number, y: number) {
        return this.#data[y * this.#c + x] || 0;
    }

    [Symbol.toPrimitive](hint: string) {
        if (hint === 'number')
            return this.val(0, 0);
        return this.toString();
    }

    toString() {
        const len = this.#r * this.#c, maxX = this.#c - 1;
        let lines = [], line = [];
        for (let i = 0; i < len; ++i) {
            line.push(this.#data[i] || 0);
            if (i % this.#c === maxX) {
                lines.push(`|${line.join(',')}|`);
                line = [];
            }
        }
        return lines.join('\n');
    }

    reshape<NewR extends number, NewC extends number>(r: NewR, c: NewC) {
        if (this.#r * this.#c % c !== 0) {
            throw RangeError(`Can't reshape to ${c} columms`);
        }
        let mat: Matrix<NewR, NewC>;
        if (r === this.#r * this.#c / c) {
            mat = new Matrix(r, c);
            mat.#data = this.#data;
        }
        else {
            mat = new Matrix(r, c, this.#data);
        }
        return mat;
    }
}
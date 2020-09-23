export default class Matrix<R extends number = 1, C extends number = 1> {
    #private;
    constructor(r?: R, c?: C, data?: number[]);
    get rows(): R;
    get columns(): C;
    val(x: number, y: number): number;
    [Symbol.toPrimitive](hint: string): string | number;
    toString(): string;
    reshape<NewR extends number, NewC extends number>(r: NewR, c: NewC): Matrix<NewR, NewC>;
}
//# sourceMappingURL=matrix.d.ts.map
import { describe, it } from 'mocha';
import { assert } from 'chai';
import Matrix from '../src/matrix';

describe("Matrix conversion", function () {
    it('change row of matrix', function () {
        let mat = new Matrix(2, 3, [1, 2, 3, 4, 5, 6]);
        let row = new Matrix(1, 3, [7, 8, 9]);
        assert.equal(String(mat.changeRow(1, row)), '|1,2,3|\n|7,8,9|');
    });
    it('swap two row', function () {
        let mat = new Matrix(3, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
        assert.equal(String(mat.swapRow(0, 2)), '|7,8,9|\n|4,5,6|\n|1,2,3|');
    });
    it('multiply a row by a number', function () {
        let mat = new Matrix(2, 3, [1, 2, 3, 4, 5, 6]);
        assert.equal(String(mat.rowMultiBy(0, 2)), '|2,4,6|\n|4,5,6|');
    });
    it('add row to anothor row', function () {
        let mat = new Matrix(3, 3, [9, 8, 7, 6, 5, 4, -3, -2, -1]);
        assert.equal(String(mat.rowAddToRow(2, 0)), '|6,6,6|\n|6,5,4|\n|-3,-2,-1|');
    });
});

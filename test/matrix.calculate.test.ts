import { describe, it } from 'mocha';
import { assert } from 'chai';
import Matrix from '../src/matrix';

describe("Matrix calculate", function () {
    it('matrix addition', function () {
        let left = new Matrix(2, 2, [1, 2, 3, 4]);
        let right = new Matrix(2, 2, [3, 7, 5, 4]);
        assert.equal(String(left.add(right)), '|4,9|\n|8,8|');
    });
    it('vector multiply', function () {
        let left = new Matrix(1, 3, [1, 2, 3]);
        let right = new Matrix(3, 1, [1, 2, 3]);
        assert.equal(Number(left.multiply(right)), 14);
    });
    it('matrix multiply', function () {
        let left = new Matrix(2, 3, [1, 2, 3, 4, 5, 6]);
        let right = new Matrix(3, 2, [1, 4, 2, 5, 3, 6]);
        assert.equal(String(left.multiply(right)), '|14,32|\n|32,77|');
    });
    it('hadamard product', function () {
        let left = new Matrix(2, 2, [1, 2, 4, 5]);
        let right = new Matrix(2, 2, [1, 4, 2, 5]);
        assert.equal(String(left.hadamard(right)), '|1,8|\n|8,25|');
    });
    it('multiply by unit', function () {
        let mat = new Matrix(2, 3, [1, 2, 3, 4, 5, 6]);
        assert.equal(String(mat.multiply(Matrix.unit(3))), String(mat));
        assert.equal(String(Matrix.unit(2).multiply(mat)), String(mat));
    });
    it('matrix transpose', function () {
        let mat = new Matrix(2, 3, [1, 2, 3, 4, 5, 6]);
        assert.equal(String(mat.transpose), '|1,4|\n|2,5|\n|3,6|');
    });
    it('change row of matrix', function () {
        let mat = new Matrix(2, 3, [1, 2, 3, 4, 5, 6]);
        let row = new Matrix(1, 3, [7, 8, 9]);
        assert.equal(String(mat.changeRow(1, row)), '|1,2,3|\n|7,8,9|');
    })
});

import { describe, it } from 'mocha';
import { assert } from 'chai';
import Matrix from '../src/matrix';

describe("Matrix testing", function () {
    it("create matrix", function () {
        assert.equal(String(new Matrix(2, 3)), '|0,0,0|\n|0,0,0|');
    });
    it('from number', function () {
        assert.equal(String(Matrix.number(9)), '|9|');
    });
    it('to number', function () {
        assert.equal(Number(Matrix.number(6)), 6);
    });
    it('check size', function () {
        let mat = new Matrix(3, 2);
        let { rows, columns } = mat;
        assert.deepEqual([rows, columns], [3, 2]);
    });
    it('reshape matrix', function () {
        let mat = new Matrix(3, 2, [1, 2, 3, 4, 5, 6]);
        assert.equal(String(mat.reshape(2, 3)), '|1,2,3|\n|4,5,6|');
    });
    it('resize matrix', function () {
        let mat = new Matrix(3, 2, [1, 2, 3, 4, 5, 6]);
        assert.equal(String(mat.reshape(3, 3)), '|1,2,3|\n|4,5,6|\n|0,0,0|');
    })
});
import { describe, it } from 'mocha';
import { assert } from 'chai';
import Matrix from '../src/matrix';

describe("Matrix testing", function () {
    it("create matrix", function () {
        assert.equal(String(new Matrix), '|0|');
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

    let shapeMat = new Matrix(3, 2, [1, 2, 3, 4, 5, 6]);
    it('reshape matrix', function () {
        assert.equal(String(shapeMat.reshape(2, 3)), '|1,2,3|\n|4,5,6|');
    });
    it('resize matrix', function () {
        assert.equal(String(shapeMat.reshape(2, 5)), '|1,2,3,4,5|\n|6,0,0,0,0|');
    });

    let dataMat = new Matrix(3, 5, [
        4, 7, 8, 1, 6,
        9, 4, 2, 3, 7,
        5, 0, 3, 2, 4,
    ]);
    it('row vector', function () {
        assert.equal(String(dataMat.getRow(1)), '|9,4,2,3,7|');
    });
    it('get wrong row', function () {
        assert.throw(() => dataMat.getRow(3), 'wrong row index');
    });
    it('column vector', function () {
        assert.equal(String(dataMat.getColumn(3)), '|1|\n|3|\n|2|');
    });
    it('column single vector', function () {
        let vec = new Matrix(3, 1, [1, 2, 3])
        assert.equal(String(vec.getColumn(0)), '|1|\n|2|\n|3|');
    });
    it('get wrong column', function () {
        assert.throw(() => dataMat.getColumn(-1), 'wrong column index');
    });
    it('unit matrix', function () {
        assert.equal(String(Matrix.unit(3)), '|1,0,0|\n|0,1,0|\n|0,0,1|');
    })
});

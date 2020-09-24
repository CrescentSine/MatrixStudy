import { describe, it } from 'mocha';
import { assert } from 'chai';
import Matrix from '../src/matrix';

describe("Matrix conversion", function () {
    it('change row of matrix', function () {
        let mat = new Matrix(2, 3, [1, 2, 3, 4, 5, 6]);
        let row = new Matrix(1, 3, [7, 8, 9]);
        assert.equal(String(mat.changeRow(1, row)), '|1,2,3|\n|7,8,9|');
    })
});

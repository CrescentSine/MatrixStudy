import { describe, it } from 'mocha';
import { assert } from 'chai';
import Matrix from '../src/matrix';

describe("Matrix testing", function () {
    it("create matrix", function () {
        assert.equal((new Matrix(2,3)).toString(), '|0,0,0|\n|0,0,0|');
    })
});
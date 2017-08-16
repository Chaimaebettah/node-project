'use strict';

const expect = require('expect');
const arithmetic = require('../lib/arithemetic');

describe('testing arithmetic', () => {
    describe('testing add', () => {
        it('should return 4', () =>{
            let result1 = arithmetic.add(2, 2);
            expect(result1).toEqual(4);
        })
    });
    describe('testing sub', () => {
        it('should return 3', () => {
            let result2 = arithmetic.sub(6,3);
            expect(result2).toEqual(3);
        })
    })
});
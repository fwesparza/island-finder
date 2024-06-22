const { expect } = require('chai');

const [countIslands, getNeighbors] = require('../island.js');

describe('getNeighbors', () => {

    let matrix1;
    let matrix2;
    let matrix3;
    let matrix4;


    beforeEach(function () {
        matrix1 = [
            [1,1,1,1,0],
            [0,1,1,0,1],
            [0,1,1,0,1],
        ]

        matrix2 = [
            [1,1,1,0,0],
            [0,1,1,0,1],
            [0,1,1,0,1],
        ]

        matrix3 = [
            [0,0,1,0,0,1,1],
            [1,1,0,0,1,0,1],
            [0,0,0,1,0,0,1],
            [1,0,1,0,0,1,1],
        ]

        matrix4 = [
        //            0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19
        /* 0 */     [ 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0], // 0
        /* 1 */     [ 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0], // 1
        /* 2 */     [ 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], // 2
        /* 3 */     [ 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 3
        /* 4 */     [ 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], // 4
        /* 5 */     [ 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0], // 5
        /* 6 */     [ 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0], // 6
        /* 7 */     [ 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0], // 7
        /* 8 */     [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 8
        /* 9 */     [ 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 9
        /* 10 */    [ 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], // 10
        /* 11 */    [ 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], // 11
        /* 12 */    [ 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0], // 12
        /* 13 */    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0], // 13
        /* 14 */    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0], // 14
        /* 15 */    [ 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 15
        /* 16 */    [ 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0], // 16
        /* 17 */    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], // 17
        /* 18 */    [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0], // 18
        /* 19 */    [ 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], // 19
        //            0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19
        ]

    });

    it('can return adjacent neighbors that contain a 1', () => {

        expect(getNeighbors(1, 1, matrix1)).to.have.deep.members([[0, 0], 
            [0, 1], [0, 2], [1,2], [2,1], [2,2]])

    });

    it('can return neighbors from the corners', () => {

        expect(getNeighbors(0, 0, matrix2)).to.have.deep.members([[0, 1], 
            [1, 1]]);

        expect(getNeighbors(19, 19, matrix4)).to.have.deep.members([[18, 18]]);


    });

    it('will return neighbors from 0s', () => {

        expect(getNeighbors(3, 4, matrix3)).to.have.deep.members([[3, 5], [2, 3]]);
        
        expect(getNeighbors(13, 14, matrix4)).to.have.deep.members([[12, 13], [12, 14], [12, 15], [13, 13], [13, 15], [14, 13], [14, 14], [14, 15]]);

    });

});

describe('countIslands', () => {

    let matrix1;
    let matrix2;
    let matrix3;
    let matrix4;

    beforeEach(function () {

        matrix1 = [
                [1,1,1,1,0],
                [0,1,1,0,1],
                [0,1,1,0,1],
            ]

            matrix2 = [
                [1,1,1,0,0],
                [0,1,1,0,1],
                [0,1,1,0,1],
            ]

            matrix3 = [
                [0,0,1,0,0,1,1],
                [1,1,0,0,1,0,1],
                [0,0,0,1,0,0,1],
                [1,0,1,0,0,1,1],
            ]


            matrix4 = [
        //            0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19
        /* 0 */     [ 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0], // 0
        /* 1 */     [ 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0], // 1
        /* 2 */     [ 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], // 2
        /* 3 */     [ 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 3
        /* 4 */     [ 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], // 4
        /* 5 */     [ 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0], // 5
        /* 6 */     [ 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0], // 6
        /* 7 */     [ 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0], // 7
        /* 8 */     [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 8
        /* 9 */     [ 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 9
        /* 10 */    [ 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], // 10
        /* 11 */    [ 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], // 11
        /* 12 */    [ 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0], // 12
        /* 13 */    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0], // 13
        /* 14 */    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0], // 14
        /* 15 */    [ 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 15
        /* 16 */    [ 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0], // 16
        /* 17 */    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], // 17
        /* 18 */    [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0], // 18
        /* 19 */    [ 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], // 19
        //            0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19
        ]
    });

    it('will return the the number of islands found in the graph', () => {

        expect(countIslands(matrix1)).to.equal(1);
        expect(countIslands(matrix2)).to.equal(2);
        expect(countIslands(matrix4)).to.equal(17);

    });

    it('will count islands of size 1', () => {
        expect(countIslands(matrix3)).to.equal(3);

    });

});
import twoSum from "./twoSum";

describe("Dada uma matriz de inteiros nums e um inteiro target, retorne os índices dos dois números de modo que eles somem \"target\".", () => {
    it("precisa retornar [0, 1] para [2, 7, 11, 15] e 9", () => {
        expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    });

    it("precisa retornar [1, 2] para [3, 2, 4] e 6", () => {
        expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
    });

    it("precisa retornar [0, 1] para [3, 3] e 6", () => {
        expect(twoSum([3, 3], 6)).toEqual([0, 1]);
    });
});
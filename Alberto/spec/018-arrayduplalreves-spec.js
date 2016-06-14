
describe("Array duplicado al reves", function() {
    it("Array duplicado al reves", function() {
        var array = [1, 2, 3, 4, 5];
        var array2 = [];
        for (i=array.length-1; i>=0; i--) {
          array2.push(array[i]);
            }
        expect(array2).toEqual([5,4,3,2,1]);
    });
});

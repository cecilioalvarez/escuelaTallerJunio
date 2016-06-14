
describe("Array negativo", function() {
    it("Array negativo", function() {
        var array = [1, 2, 3, 4, 5];

        for (i=array.length-1; i>=0; i--) {
        console.log(array[i]);
            }
        expect(array.length).toBe(5);
    });
});

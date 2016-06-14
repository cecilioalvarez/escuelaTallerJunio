describe("Array push duplicado mayores", function() {
    it("Array push duplicado mayores", function() {
        var array = [1, 2, 3, 4, 5];
        var array2 = [];
        for (var i = 0; i < array.length; i++) {
            if (array[i] > 3) {
                array2.push(array[i]);
            }
        }
        expect(array2.length).toBe(2);
    });
});

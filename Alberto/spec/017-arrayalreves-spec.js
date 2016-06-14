
describe("Array negativo", function() {
    it("Array negativo", function() {
        var array = [1, 2, 3, 4, 5];
        var texto="";
        for (i=array.length-1; i>=0; i--) {
          texto=texto+i;
            }
        expect(texto).toEqual("43210");
    });
});

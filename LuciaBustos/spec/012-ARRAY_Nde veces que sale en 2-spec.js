describe("Manejo  de arrays", function() {
    it("numero de veces del 2", function() {
        var lista = [2, 2, 3, 5, 1];
        var elemento=2;
        var contador=0;
        for (var i = 0; i < lista.length; i++) {
            if (elemento==lista[i]) {
              contador++;
            }
        }
        expect(contador).toBe(2);
    });
});

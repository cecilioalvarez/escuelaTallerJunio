describe("Manejo  de arrays", function() {

    it("test longitud array", function() {

        var lista = [1, 2, 3];

        expect(lista.length).toBe(3)


    });

    it("test suma items del array", function() {

        var lista = [1, 2, 3];
        var suma = 0;
        for (var i = 0; i < lista.length; i++) {

            suma = suma + lista[i];
        }
        expect(suma).toBe(6);


    });

    it("numero de veces del 2", function() {

        var lista = [2,2,3,4,5];
        var elemento = 2;
        var contador=0;
        for (var i = 0; i < lista.length; i++) {

            if (elemento==lista[i]) {
                    contador++;

            }
        }
        expect(contador).toBe(2);
    });

});

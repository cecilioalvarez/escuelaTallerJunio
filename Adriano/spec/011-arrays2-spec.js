describe("manejo de arrays ", function() {

    it("test array suma items del array", function() {

        var lista = [1, 2, 3, 2, 2];
        var suma = 0;
        for (var i = 0; i < lista.length; i++) {
            suma = suma + lista[i];
        }
        var media = suma / lista.length;
        expect(media).toBe(2);
    });


    it("test array push añadir elementos", function() {
        var lista = [1, 2, 3, 4, 5];
        lista.push(11);
        lista.push(22);
        lista.push(33);
        expect(lista.length).toBe(8);
    });


    it("test array duplicar", function() {
        var lista = [1, 2, 3, 4, 5, 1, 1];
        var lista2 = [];

        for (i = 0; i < lista.length; i++) {
            lista2.push(lista.length);
        }

        expect(lista2.length).toBe(7);
    });


    it("test array duplicar de otra forma", function() {
        var lista = [1, 2, 3, 4, 5, 1, 1];
        var lista2 = [];

        for (i = 0; i < lista.length; i++) {
            lista2.push(lista[i]);
        }

        expect(lista2.length).toBe(lista2.length);
    });


    it("test array duplicar solo numeros mayores que tres", function() {
        var lista = [1, 2, 3, 4];
        var lista2 = [];

        for (i = 0; i < lista.length; i++) {
            if (lista[i] > 3) {
                lista2.push(lista[i]);
            }
        }

        expect(lista2.length).toBe(1);
    });


    it("test recorrer array alreves bucle for", function() {
        var lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        for (i = lista.length - 1; i >= 0; i--) {

            console.log(lista[i]);
        }
        expect(lista.length).toBe(9);
    });

    it("test recorrer array alreves bucle for de otra forma", function() {
        var lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        var texto = "";
        for (i = lista.length - 1; i >= 0; i--) {
            texto = texto + lista[i];
        }
        expect(texto).toBe("987654321");
    });


    it("test poner array alreves bucle for", function() {
        var lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        var lista2 = [];
        for (i = lista.length - 1; i >= 0; i--) {

            lista2.push(lista[i]);
            //console.log(lista2);
        }
        expect(lista2).toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1]);
    });


    it("test array con items al cuadrado", function() {
        var lista = [1, 2, 3];
        var lista2 = [];
        for (i = 0; i < lista.length; i++) {

            lista2.push(lista[i] * 2);
            //console.log(lista2);
        }
        expect(lista2).toEqual([2, 4, 6]);
    });


    it("test array notas y texto", function() {
        var lista = [2, 4, 6, 8, 10];
        var lista2 = [];
        for (var i = 0; i < lista.length; i++) {

            if (lista[i] <= 2) {

                lista2.push("0 patatero");
            } else if (lista[i] >= 2 && lista[i] <= 4) {
                lista2.push("Insuficiente");
            } else if (lista[i] >= 5 && lista[i] <= 6) {
                lista2.push("Bien");
            } else if (lista[i] >= 7 && lista[i] <= 8) {
                lista2.push("Notable");
            } else {
                lista2.push("Sobresaliente");
            }
        }
        expect(lista2).toEqual(["0 patatero", "Insuficiente", "Bien", "Notable", "Sobresaliente"]);
    });
});

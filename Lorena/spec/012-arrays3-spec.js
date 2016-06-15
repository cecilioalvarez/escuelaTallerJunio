describe("manejo de arrays ", function() {

    it("test 3 arrays suma de los dos primeros", function() {

        var lista = [1,2,3,4];
        var lista2 = [1,2,3,4];
        var lista3 = [];

        for (var i = 0; i < lista.length; i++) {
            lista3.push(lista[i]+lista2[i]);
        }
        expect(lista3).toEqual([2,4,6,8]);
    });
      });

describe("Manejo  de arrays", function() {
    it("test longitud array", function() {
        var lista = [1,2,3,4,5,6];
          var suma=0;
        for(var i=0;i<lista.length; i++) {
            if (lista[i]>=5) {
            suma= suma+lista[i];
            }
        }
        expect(suma).toBe(11);
    });
  });

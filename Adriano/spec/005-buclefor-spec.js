describe("bucle for ", function() {

    it("test bucle for suma 1 a 10", function() {
        var suma = 0;
        for (i = 0; i < 10; i++) {
            suma = suma + i;
        }
        expect(suma).toBe(45);

    });

    it("test bucle for suma 5 primeros pares", function() {
        var suma = 0;
        for (i = 0; i < 10; i = i + 2) {
            suma = suma + i;
        }
        expect(suma).toBe(20);

    });


    it("test bucle for suma 5 primeros pares de otra forma", function() {
        var suma = 0;
        for (i = 0; i < 5; i++) {
            suma = suma + i*2;
        }
        expect(suma).toBe(20);

    });

    it("test bucle while suma 5 primeros pares", function() {
      var suma=0;
      while (suma < 20) {
            suma=suma+2;
        }
        expect(suma).toBe(20);
    });
});

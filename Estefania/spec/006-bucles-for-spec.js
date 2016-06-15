describe("Manejo de bucle  for", function() {


    it("test bucle for suma 10 items", function() {
        var resultado=0;

        for(var i=0;i<10;i++) {

            resultado=resultado+i;
        }

        expect(resultado).toBe(45);
    });

    it("test suma 5 primeros pares", function() {

        var resultado=0;

        for(var i=0;i<5;i++) {

            resultado=resultado+(i*2);
        }

        expect(resultado).toBe(20);
    });




});

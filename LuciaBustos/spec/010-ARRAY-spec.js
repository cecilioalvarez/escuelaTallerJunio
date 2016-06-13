describe("Manejo de arrays",
    function() {

        it("test longitud array",
            function() {
                var lista=[1,2,3];
                expect(lista.length)toBe(3);
            });



        it("test suma items del array",
            function() {
              var lista=[1,2,3];
              var suma=0;
              for (var i=0; i<lista.length; i++){
                suma=suma+lista[i];
              }
                    expect(suma).toBe(6);


            });

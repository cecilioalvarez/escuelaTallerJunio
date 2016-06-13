describe("Manejo de Objetos",
    function() {

        it("igualdad entre Objetos",
            function() {
                var objeto1 = {
                    nombre: "pepe"
                };
                var objeto2 = {
                    nombre: "pepe"
                };
                expect(objeto1).toBe(objeto1);
            });



        it("Manejo ente dos Objetos",
            function() {
                var objeto1 = {
                    nombre: "pepe"
                };
                var objeto2 = {
                    nombre: "pepe"
                };
                expect(objeto1).toEqual(objeto2);
            });

    });

describe("Manejo de Objetos",
    function() {

        it("test de identidad de Objetos",
            function() {
                var objeto1 = {
                    nombre: "pepe"
                };
                var objeto2 = {
                    nombre: "pepe"
                };
                expect(objeto1).not.toBe(objeto2);
            });



        it("test comparacion objetos entre si",
            function() {
                var objeto1 = {
                    nombre: "pepe"
                };
                var objeto2 = {
                    nombre: "pepe"};
                    expect(objeto1).toEqual(objeto2);


            });



            it("test contiene propiedad nombre",
                function() {
                    var objeto1 = {
                        nombre: "pepe"
                    };

                    expect(objeto1.nombre).tobeDefined();
    });
        });

describe("Conjunto test", function() {

  it("test if sencillo", function() {
        var nota = 5;
        var resultado = "";
        if (nota >= 5) {

            resultado = "aprobado";

        }

        expect(resultado).toBe("aprobado");

    });

      it("test if sencillo", function() {
            var nota = 4;
            var resultado = "";
            if (nota <= 4) {

                resultado = "negativo";

            }

            expect(resultado).toBe("negativo");

        });

        it("test if sencillo", function() {
              var nota = 8;
              var resultado = "";
              if (nota >= 5 && nota <7) {

                //resultado= "bien";

              } else {

resultado="no tienes un bien";

              }

              expect(resultado).toBe("no tienes un bien");

          });

          it("test if sencillo con clausula OR", function() {
                var nota = 1;
                var resultado = "";
                if (nota <2 || nota >8) {


        resultado="eres de los pocos elegidos";

                }

                expect(resultado).toBe("eres de los pocos elegidos");

            });




});

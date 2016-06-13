describe("Manejo de Sentencias If", function() {

    it("test if sencillo aprovado", function() {
        var nota = 5;
        var resultado = 0;
        if (nota >= 5) {
            resultado = "aprovado";
        }

        expect(resultado).toBe("aprovado");
    });

    it("test if sencillo suspenso", function() {
        var nota = 5;
        var resultado = 0;
        if (nota <= 5) {
            resultado = "suspenso";
        }

        expect(resultado).toBe("suspenso");
    });

    it("test if sencillo con rango bien", function() {
        var nota = 6;
        var resultado = "";
        if (nota >= 5 && nota < 7) {
            resultado = "bien";

            expect(resultado).toBe("bien");
        }
    });


    it("test if sencillo con nota rango", function() {
        var nota = 8;
        var resultado = "";
        if (nota >= 5 && nota < 7) {
            //  resultado="bien";
        } else {
            resultado = "no tienes un bien";
        }

        expect(resultado).toBe("no tienes un bien");
    });


    it("test if sencillo con clausula OR", function() {
        var nota = 1;
        var resultado = "";
        if (nota <2 || nota > 8) {
            resultado = "eres de los pocos elegidos";
        }

        expect(resultado).toBe("eres de los pocos elegidos");
    });


});

describe("Manejo de parse", function() {


    it("parse numeros enteros", function() {

        var cadena1=5;
        var cadena2=7;
        var numero1=parseInt(cadena1);
        var numero2=parseInt(cadena2);
        var suma= numero1+numero2;
        expect(suma).toBe(12);


    });

    it("parse numeros decimales", function() {

        var cadena1=5.2;
        var cadena2=7.3;
        var numero1=parseFloat(cadena1);
        var numero2=parseFloat(cadena2);
        var suma= numero1+numero2;
        expect(suma).toBe(12.5);


    });


});

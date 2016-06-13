describe("Manejo de parse", function() {

  it("parse numeros enteros", function() {
<<<<<<< HEAD
var cadena1=5.2;
var cadena2=7.3;
var numero1=parseFloat(cadena1);
var numero2=parseFloat(cadena2);
var suma= numero1+numero2;
expect(suma).toBe(12.5);
=======
var cadena1=5;
var cadena2=7;
var numero1=parseInt(cadena1);
var numero2=parseInt(cadena2);
var suma1= numero1+numero2;
expect(suma1).toBe(12);
>>>>>>> 0b0b527efab28da426947451c2f8487b06df7663
});
it("parse numeros decimales", function() {
var cadena3=5.2;
var cadena4=7.3;
var numero3=parseFloat(cadena3);
var numero4=parseFloat(cadena4);
var suma2= numero3+numero4;
expect(suma2).toBe(12.5);
});

});

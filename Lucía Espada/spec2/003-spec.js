var misfunciones=require("./funciones2.js");//importa el fichero
//creo el test
describe ("funciones bucles y numeros", function(){

var numero1;
var array1;
beforeEach(function() {
//valores fijos
 numero1 = 4;
 array1 =[1,2,3];

});

it ("test suma n primeros numeros", function() {

expect(misfunciones.sumaNumeros(numero1)).toBe(6);

});

it ("test factorial n primeros numeros", function() {

expect(misfunciones.factorial(numero1)).toBe(24);

});

it("test elementos en el array", function() {

    expect(misfunciones.longitudArray(array1)).toBe(3);

});

it("test suma elementos en el array", function() {

    expect(misfunciones.sumaArray(array1)).toBe(6);
});

it("test comparacion y suma arrays", function() {
  expect(misfunciones.mayorArray(array1,array2)).toBe(12);
});
});

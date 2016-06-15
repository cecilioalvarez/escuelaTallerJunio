var operaciones=require("./funciones1.js");//importa el fichero
describe ("funciones basicas", function(){

  var numero1;
  var numero2;

beforeEach(function() {
  //valores fijos
  var numero1 = 2;
  var numero2 = 2;

});

it ("test function suma", function() {

expect(operaciones.suma(2,2)).toBe(4);

});

it ("test function resta", function() {

expect(operaciones.resta(2,2)).toBe(0);

});
it ("test function multiplicar", function() {

expect(operaciones.producto(2,2)).toBe(4);

});
it ("test function dividir", function() {

expect(operaciones.divisor(2,2)).toBe(1);

});
});

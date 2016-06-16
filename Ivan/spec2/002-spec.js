var misfunciones=require("./funciones2.js");
describe("funciones bucles y numeros", function() {

var numero1;

beforeEach(function(){
  numero1=4;
  array1=[1,2,3];
});
it("test suma n primeros numeros", function(){

  expect(misfunciones.sumaNumeros(numero1)).toBe(6);

});

it("test suma n primeros numeros", function(){

  expect(misfunciones.factorial(numero1)).toBe(6);

});

it("test suma elementos en el array", function(){

  expect(misfunciones.longitudarray(array1)).toBe(3);

});

it("test suma elementos en el array", function(){

  expect(misfunciones.sumaarray(array1)).toBe(6);

});

});

var misfunciones=require("./funciones2.js");

//creo el test
describe("Funciones basicas", function() {

  var numero1;
var array1;

  beforeEach(function(){
array1=[1,2,3];
    numero1=4;
  });

  it ("test suma n numeros", function(){

    expect(misfunciones.sumaNumeros(numero1)).toBe(6);
  });

  it ("test factorial n primeros numeros", function(){

    expect(misfunciones.factorial(numero1)).toBe(24);
  });

it ("test elementos en el array", function(){

  expect(misfunciones.arrayLongitud(array1)).toBe(3);
});

it ("test suma elementos en el array", function(){

  expect(misfunciones.arraySuma(array1)).toBe(6);
});
});

var misfunciones=require("./funciones2.js");

//creo el test
describe("funciones bucles y numeros", function(){

var numero1;



beforeEach(function(){
  numero1=4;
  array1=[1,2,3];

});

  it("test suma n primeros numeros", function(){
    expect(misfunciones.sumaNumeros(numero1)).toBe(6);
  });

  it("test factorial n primeros numeros", function(){
    expect(misfunciones.factorial(numero1)).toBe(24);
  });

  it("test elementos en el array", function(){
    expect(misfunciones.longitudArray(array1)).toBe(3);
  });

it("test suma elementos array", function(){
  expect(misfunciones.sumaArray(array1)).toBe(6);
});

});

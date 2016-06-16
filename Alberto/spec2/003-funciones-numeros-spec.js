var misfunciones=require("./function2.js");
describe("Funciones bucles y numeros", function() {
  var numero1;
  var array1;
  var array2;
  beforeEach(function() {
    numero1=4;
    array1=[1,2,3];
    array2=[2,4,6];
  });
  it("test suma n numeros", function() {
    expect(misfunciones.sumaNumeros(numero1)).toBe(6);
  });
  it("test factorial n a primeros numeros", function() {
    expect(misfunciones.factorial(numero1)).toBe(24);
  });
  it("test longitud array", function() {
    expect(misfunciones.longitudArray(array1)).toBe(3);
  });
  it("test suma valores array", function() {
    expect(misfunciones.sumaArray(array1)).toBe(6);
});
it("test comparacion y suma arrays", function() {
  expect(misfunciones.mayorArray(array1,array2)).toBe(12);
});
});

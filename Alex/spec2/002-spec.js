var operaciones=require("./funciones1.js");
describe("funciones basicas", function(){

var numero1;
var numero2;

beforeEach(function(){
  numero1=2;
  numero2=2;
});

  it("test function suma", function(){
    expect(operaciones.suma(numero1,numero2)).toBe(4);
  });

  it("test function resta", function(){
    expect(operaciones.resta(numero1,numero2)).toBe(0);
  });

  it("test function multiplica", function(){
    expect(operaciones.multiplica(numero1,numero2)).toBe(4);
  });

  it("test function dividir", function(){
    expect(operaciones.dividir(numero1,numero2)).toBe(1);
  });

});

var operaciones=require("./funciones1.js");
describe("Funciones basicas", function(){

  var numero1;
  var numero2;

  beforeEach(function(){

    numero1=2;
    numero2=2;
  });

  it ("test function suma", function(){

    expect(operaciones.suma(numero1,numero2)).toBe(4);
  });


  it ("test function resta", function(){

    expect(operaciones.resta(numero1,numero2)).toBe(0);
  });

  it ("test function multiplicacion", function(){

    expect(operaciones.multiplicacion(numero1,numero2)).toBe(4);
  });

  it ("test function division", function(){

    expect(operaciones.division(numero1,numero2)).toBe(1);
  });
});

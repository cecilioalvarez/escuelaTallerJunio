var operaciones=require("./sumar.js");

describe(" Funciones basicas", function() {

  it("test function suma", function() {

    expect(operaciones.suma(2,2)).toBe(4);


  });



});

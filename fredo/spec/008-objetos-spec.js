describe("manejo de objetos", function(){

it ("parse numeros enteros", function(){

var objeto1={nombre:"pepe"};
var objeto2={nombre:"pepe"};

expect(objeto1).not.toBe(objeto2);
});

  it ("igualdad entre dos objetos", function(){
    var objeto1={nombre:"pepe"};
    var objeto2={nombre:"pepe"};

    expect(objeto1).toEqual(objeto2);
    });
    it ("test contiene propiedad nombre", function(){
      var objeto1={nombre:"pepe"};
      expect(objeto1.nombre).toBeDefined();
    });
  });

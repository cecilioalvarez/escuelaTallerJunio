describe("Manejo de objetos", function() {

  it("igualdad objeto mismo", function(){

var objeto1={nombre:"pepe"};
var objeto2={nombre:"pepe"};

expect(objeto1).toBe(objeto1);
});

it("igualdad entre dos objetos", function() {

var objeto1={nombre:"pepe"};
var objeto2={nombre:"pepe"};

expect(objeto1).toEqual(objeto2);
});


});

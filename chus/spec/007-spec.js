describe ("Manejo de Objetos", function(){
  it ("igualdad objeto consigo mismo", function() {

var objeto1={nombre:"pepe"};
var objeto2={nombre:"pepe"};
expect(objeto1).not.toBe(objeto2);
});
it ("igualdad entre dos objetos", function() {
  var objeto1={nombre:"pepe"};
  var objeto2={nombre:"pepe"};
  expect(objeto1).toEqual(objeto2);
});
});

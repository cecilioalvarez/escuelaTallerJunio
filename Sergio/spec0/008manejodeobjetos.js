describe("Manejos de Objetos", function() {

  it("igualdad entre objeto consigo mismo", function() {

var objeto1={nombre:"pepe"};
var objeto2={nombre:"pepe"};
expect(objeto1).not.toBe(objeto1);

});

  it("igualdad entre 2 objetos", function() {

var objeto1={nombre:"pepe"};
var objeto2={nombre:"pepe"};
expect(objeto1).toEqual(objeto2);
});
it("igualdad entre objeto consigo mismo", function() {

var objeto1={nombre:"pepe"};
var objeto2={nombre:"pepe"};
expect(objeto1).toBe(objeto1);

});
it("text suma items del array", function() {

var lista=(1,2,3);
var suma=0;
for (var i=0;i<lista.length; i++){
suma=suma+lista(i);

}
});
});

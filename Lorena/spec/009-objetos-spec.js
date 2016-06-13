describe("manejo de objetos ", function() {

    it("test de identidad de objetos", function() {

var objeto1={nombre:"pepe"};
var objeto2={nombre:"pepe"};
expect(objeto1).not.toBe(objeto2);

    });

    it("test comparacion objetos entre si", function() {

var objeto1={nombre:"pepe"};
var objeto2={nombre:"pepe"};
expect(objeto1).toEqual(objeto2);

    });

    it("test contiene propiedad", function() {
var objeto1={nombre:"pepe"};

expect(objeto1.nombre).toBeDefined();

    });


    it("test saber longitud array", function() {
var lista=[0,1,2,3,4,5,6,7,8,9];

expect(lista.length).toBeDefined(10);
    });

    it("test array suma valores", function() {

var lista=[0,1,2,3,4,5,6,7,8,9];
var suma=0;
for (var i = 0; i < lista.length; i++) {
suma=suma+i;
}
expect(lista.length).toBe(10);
    });
    });

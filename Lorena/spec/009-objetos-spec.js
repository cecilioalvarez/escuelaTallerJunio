describe("manejo de objetos ", function() {

    it("igualdad objeto consigo mismo", function() {

var objeto1={nombre:"pepe"};
var objeto2={nombre:"pepe"};
expect(objeto1).toBe(objeto1);

    });



    it("igualdad objeto consigo mismo", function() {

var objeto1={nombre:"pepe"};
var objeto2={nombre:"pepe"};
expect(objeto1).toEqual(objeto2);

    });
    });

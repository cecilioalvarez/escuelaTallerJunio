describe ("Manejo de Objetos", function(){
it ("igualdad entre objetos", function() {

var objeto1= {nombre:"pepe"};
var objeto2= {nombre:"pepe"};

expect(objeto1).toBe(objeto1);

});
it ("igualdad entre dos objetos", function() {

var objeto1= {nombre:"pepe"};
var objeto2= {nombre:"pepe"};

expect(objeto1).toEqual(objeto1);

});

it ("test de identidad de objetos", function() {

var objeto1= {nombre:"pepe"};
var objeto2= {nombre:"pepe"};

expect(objeto1).not.toBe(objeto2);

});

it ("test comparacion objetos entre si", function() {

var objeto1= {nombre:"pepe"};
var objeto2= {nombre:"pepe"};

expect(objeto1).toEqual(objeto2);

});

it ("test contiene propiedad nombre", function() {

var objeto1= {nombre:"pepe"};


expect(objeto1.nombre).toBeDefined();

});
});

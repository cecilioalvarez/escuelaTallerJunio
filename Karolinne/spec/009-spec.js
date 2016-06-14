describe("manejo de arrays ", function() {

  it("test array suma items del array", function() {

var lista=[1,2,3,2,2];
var suma=0;
for (var i = 0; i < lista.length; i++) {
suma=suma+lista[i]/5;
}
expect(suma).toBe(2);
  });
  it("test añadir al array", function() {

var lista=[1,2,3,2,2];


expect(lista.length).toBe(5);
lista.push(6);
expect(lista.length).toBe(6);
  });

  it("test añadir a un array otro array", function() {

var lista=[1,2,3,2,2];
var lista2=[];


expect(lista.length).toBe(5);
lista.push(6);
expect(lista.length).toBe(6);
  });
  });

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

  it("test array duplicar", function() {
var lista=[1,2,3,4,5,1];
var lista2=[];
for (i=0; i<lista.length; i++) {
lista2.push(lista.length);

}


expect(lista2.length).toBe(6);
  });
  });

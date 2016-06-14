describe("manejo de arrays ", function() {

  it("test array suma items del array", function() {

var lista=[1,2,3,2,2];
var suma=0;
for (var i = 0; i < lista.length; i++) {
suma=suma+lista[i]/5;
}
expect(suma).toBe(2);
  });
  });

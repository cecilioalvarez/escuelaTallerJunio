describe("manejo de arrays ", function() {

    it("test saber longitud array", function() {
var lista=[0,1,2,3,4,5,6,7,8,9];

expect(lista.length).toBe(10);
    });

    it("test array suma items del array", function() {

var lista=[1,2,3];
var suma=0;
for (var i = 0; i < lista.length; i++) {
suma=suma+lista[i];
}
expect(suma).toBe(6);
    });

    it("test array el numero menor", function() {

var lista=[1,2,3];
var menor=lista[0];
for (var i = 0; i > lista.length; i++) {

  if (lista[i]<menor) {
    menor=lista[i];
}

}
expect(menor).toBe(1);
    });
    });

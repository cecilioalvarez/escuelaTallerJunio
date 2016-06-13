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

    it("test el numero de doses(2) que hay en el array", function() {

var lista=[2,2,3,5,1];
contador=2;
for (var i = 0; i > lista.length; i++) {

  if (contador==lista[i]) {
    contador++;
}
}
expect(contador).toBe(2);
    });



    it("test array sumar todos los numeros mayores de 5", function() {

var lista=[2,2,3,5,9,10];
contador=5;
suma=0;
for (var i = 0; i < lista.length; i++) {

  if (lista[i]>contador) {
    suma=suma+lista[i];
}
}
expect(suma).toBe(19);
    });
    });

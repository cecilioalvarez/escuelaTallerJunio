
describe("Manejo  de arrays", function() {
it ("test el menor del array", function () {
var lista = [2,2,3,5,1];
var menor=lista[0];
for (var i = 0; i < lista.length; i++) {
  if (lista[i]<menor){
    menor=lista[i];
  }
}
expect(menor).toBe(1);
});
});

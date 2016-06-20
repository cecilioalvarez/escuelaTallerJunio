describe("manejo de arrays ", function() {

  it("test 3 arrays", function() {
var lista=[2,5];
var lista2=[3,4];
var lista3=[];

for (var i = 0; i < lista.length; i++){
lista3.push(lista[i]+lista2[i]);
}
expect(lista3).toEqual([5,9]);
  });
});

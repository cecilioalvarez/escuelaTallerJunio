describe("manejo de arrays ", function() {

  it("test array suma items del array", function() {

var lista=[1,2,3,2,2];
var suma=0;
for (var i = 0; i < lista.length; i++) {
suma=suma+lista[i];
}
var media=suma/lista.length;
expect(media).toBe(2);
  });


  it("test array push añadir elementos", function() {
var lista=[1,2,3,4,5];
lista.push(11);
lista.push(22);
lista.push(33);
expect(lista.length).toBe(8);
  });



  it("test array duplicar", function() {
var lista=[1,2,3,4,5,1,1];
var lista2=[];
for (i=0; i<lista.length; i++) {
lista2.push(lista.length);

}


expect(lista2.length).toBe(7);
  });
  });

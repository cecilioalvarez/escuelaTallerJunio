
describe(" Manejo de arrays", function () {

  it ("test suma 10 numeros negativos", function() {
    var lista=[1,2,3,4,5];
    var suma=0;

    for(var i=0;i<lista.length;i++) {
      suma=suma+lista[i];
      }
      var media=suma/lista.length;
    expect(media).toBe(3);
  });

});

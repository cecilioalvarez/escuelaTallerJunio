
describe(" Manejo de arrays", function () {

  it ("test suma 10 numeros negativos", function() {
    var suma=0;
    for(var i=0;i> -10;i--) {
      suma=suma+i;
    }
    expect(suma).toBe(-45);
  });

});


describe(" Manejo de sentencias If", function () {

  it ("test suma bucle", function() {
    var suma=0;
    for(var i=0;i<=10;i++){
      suma=suma+i;
    }
    expect(suma).toBe(55);
  });


  it ("test bucle suma pares", function() {
    var suma=0;
    for(var i=0;i<=10;i+2){
      suma=suma+i;
    }
    expect(suma).toBe(30);
  });

});


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
    for(var i=0;i<=5;i++){
      suma=suma+(i*2);
    }
    expect(suma).toBe(30);
  });


  it ("test bucle while suma 10 items", function() {
    var i=0;
    var suma=0;
    while (i<10) {
    	i++;
    	suma=suma+i;
    }
    expect(suma).toBe(55);
  });


  it ("test bucle do while suma 10 items", function() {
    var i=0;
    var suma=0;
    do{
      i++;
      suma=suma+i;
    }while (i<10);
    expect(suma).toBe(55);
  });

});

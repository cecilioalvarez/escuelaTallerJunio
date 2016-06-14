
describe(" Conjunto test", function () {

  it ("test variables suma", function() {
      var numero1=2.5;
      var numero2=2.5;
      var suma=numero1+numero2;
      expect(suma).toBe(5);
  });


  it ("test suma 10 numeros negativos", function() {
    var suma=0;
    for (var i=0;i>-10;i--){
      suma=suma+i;
    }
    expect(suma).toBe(-45);
  });

});

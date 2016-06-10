
describe(" Conjunto test", function () {

  it ("test variables suma", function() {
      var numero1=6;
      var numero2=3;
      var suma=numero1+numero2;
      expect(suma).toBe(9);
  });


  it ("test variables resta", function() {
      var numero1=6;
      var numero2=3;
      var resta=numero1-numero2;
      expect(resta).toBe(3);
  });


  it ("test variables division", function() {
      var numero1=6;
      var numero2=3;
      var division=numero1/numero2;
      expect(division).toBe(2);
  });


  it ("test variables multiplicacion", function() {
      var numero1=6;
      var numero2=3;
      var multi=numero1*numero2;
      expect(multi).toBe(18);
  });

});

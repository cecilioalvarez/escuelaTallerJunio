
describe(" Conjunto test", function() {

  it("test variables suma", function() {
  var numero1=6;
  var numero2=2;
  var suma=numero1+numero2;

  expect(suma).toBe(8);
  });

  it("test variables resta", function() {
    var numero1=6;
    var numero2=2;
  var resta=numero1-numero2;

  expect(resta).toBe(4);
  });

  it("test variables multiplicacion", function() {
    var numero1=6;
    var numero2=2;
  var multiplicacion=numero1*numero2;

  expect(multiplicacion).toBe(12);
  });

  it("test variables division", function() {
    var numero1=6;
    var numero2=2;
  var division=numero1/numero2;

  expect(division).toBe(3);
  });


});

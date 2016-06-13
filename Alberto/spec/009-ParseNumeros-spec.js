
describe ("Manejo de parse", function() {

  it ("parse enteros", function() {
  var cad1=5;
  var cad2=7;
  var numero1=parseInt(cad1);
  var numero2=parseInt(cad2);
  var suma=numero1+numero2;
  expect(suma).toBe(12);
});
});

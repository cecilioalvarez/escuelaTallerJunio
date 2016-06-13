
describe ("Manejo de parse", function() {

  it ("parse decimales", function() {
  var cad1=5.2;
  var cad2=7.3;
  var numero1=parseFloat(cad1);
  var numero2=parseFloat(cad2);
  var suma=numero1+numero2;
  expect(suma).toBe(12.5);
});
});

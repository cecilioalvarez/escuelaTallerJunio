
describe(" Conjunto test", function () {

it ("test variables suma", function() {
    var numero1=2;
    var numero2=3;
    var suma=numero1+numero2;
    expect(suma).toBe(5);
});


it ("text  variables suma texto", function() {
  var texto1="hola";
  var texto2="adios";
  var resultado=texto1+texto2;
  expect(resultado).toBe("holaadios");
});


it ("test variables suma 3 textos", function() {
  var texto1="hola";
  var texto2="que";
  var texto3="tal";
  var resultado=texto1+texto2+texto3;
  expect(resultado).toBe("holaquetal");
});


it ("test cambiar valor variable", function() {
  var variable="hola";
  expect(variable).toBe("hola");
  var variable="adios";
  expect(variable).toBe("adios");
});

});

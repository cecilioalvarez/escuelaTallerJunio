describe ("Conjunto test", function(){
  it ("verdadero es igual a verdadero", function() {

    var numero1=3;
    var numero2=3;
    var suma=numero1+numero2;
    expect(suma).toBe(6);
  });

it ("test variables suma texto", function(){
  var texto1="hola";
  var texto2="adios";
  var resultado=texto1+texto2;
  expect(resultado).toBe("holaadios");//esto es una comprobación
  //es el resultado la suma de hola y adios?

});

it ("test variables 3 textos", function(){
  var texto1="hola";
  var texto2="que";
  var texto3="tal";
  var resultado=texto1+texto2+texto3;
  expect(resultado).toBe("holaquetal");
});

it ("test cambiar valor variable",function(){

var variable="hola";
expect(variable).toBe("hola");
variable="adios";
  expect(variable).toBe("adios");

})
});

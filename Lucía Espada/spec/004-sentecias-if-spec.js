describe ("Manejo de Sentencias If", function(){
  it ("test if sencillo", function() {
    var nota=7;
    var resultado=0;
    if(nota>5) {

    resultado="aprobado";
    }

    expect(resultado).toBe("aprobado");

});

it ("test if sencillo", function() {
  var nota=2;
  var resultado=0;
  if(nota<5) {

  resultado="supenso";
  }

  expect(resultado).toBe("supenso");

});

  it ("test if rango", function() {
    var nota=6;
    var resultado=0;
    if(nota>=5 && nota <7) {

    resultado="bien";
    }

    expect(resultado).toBe("bien");


});

it ("test if con else rango", function() {
  var nota=8;
  var resultado=0;
  if(nota>=5 && nota <7) {

  }else{
    resultado="no tienes un bien";
  }

  expect(resultado).toBe("no tienes un bien");
})
});

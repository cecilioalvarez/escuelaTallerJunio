describe ("Manejo de Setencias If", function(){
  it ("test if secillo", function() {
    var nota=7;
    var resultado=0
    if(nota>=5){
      resultado="aprobado";
    }
    expect(resultado).toBe("aprobado");
})
it ("test if secillo nota suspenso", function() {
  var nota=3;
  var resultado="";
  if(nota<5){
    resultado="suspenso";
  }
  expect(resultado).toBe("suspenso");
})
it ("test if con else nota rango", function() {
  var nota=8;
  var resultado="";
  if(nota>=5 && nota<7){
    //resultado="bien";
  }else{
    resultado="no tienes un bien";
  }
  expect(resultado).toBe("no tienes un bien");
})
it ("test if con clausula or", function() {
  var nota=1;
  var resultado="";
  if(nota<2 || nota>8){

    resultado="eres de los pocos elegidos";
  }
  expect(resultado).toBe("eres de los pocos elegidos");
});
});

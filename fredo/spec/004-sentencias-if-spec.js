
describe ("manejo de sentencias if", function(){
  it ("test if sencillo", function(){
    var nota=5;
    var resultado="";
    if (nota>=5) {
      resultado="aprobado";
    }
    expect(resultado).toBe("aprobado");
  });
  it ("test if sencillo", function(){
    var nota=3;
    var resultado="";
    if (nota<5) {
      resultado="suspenso";
    }
    expect(resultado).toBe("suspenso");
  });
  it ("test if sencillo nota rango bien", function(){
    var nota=6;
    var resultado="";
    if (nota>=5 && nota<7) {
      resultado="bien";
    }
    expect(resultado).toBe("bien");
});
if ("test if con else nota rango", function(){
  var nota=8;
  var resultado="";
  if (nota>=5 && nota<7){

  }else{
    resultado="no tienes un bien";
  }
  expect(resultado).toBe("no tienes un bien");
});
it ("test if sencillo con clausula OR", function(){
  var nota=1;
  var resultado="";
  if (nota<2 || nota>8){
    resultado="eres de los pocos elegidos";
  }
  expert(resultado).teBe("eres de los pocos elegidos");
});
});

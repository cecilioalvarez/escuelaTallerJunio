
describe(" Manejo de sentencias If", function () {

  it ("test if aprobado", function() {
    var nota=7;
    var resultado="";
    if(nota>5){
      resultado="aprobado";
    }
    expect(resultado).toBe("aprobado");
  });


  it ("test if suspenso", function() {
    var nota=4;
    var resultado="";
    if(nota<5){
      resultado="suspenso";
    }
    expect(resultado).toBe("suspenso");
  });


  it ("test entre nota y nota", function() {
    var nota=6;
    var resultado="";
    if(nota>5 && nota<7){
      resultado="bien";
    }
    expect(resultado).toBe("bien");
  });


  it ("test if con else nota rango", function() {
    var nota=8;
    var resultado="";
    if(nota>=5 && nota<7){
      resultado="bien";
    }else {
      resultado="suspenso";
    }
    expect(resultado).toBe("suspenso");
  });


  it ("test if sencillo con clausula OR", function() {
    var nota=1;
    var resultado="";
    if(nota<2 || nota>8){
      resultado="eres de los pocos elegidos";
    }
    expect(resultado).toBe("eres de los pocos elegidos");
  });

});

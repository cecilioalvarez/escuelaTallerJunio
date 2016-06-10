describe ("Manejo de Sentencias If", function() {

  it("test if sencillo nota aprobado", function() {
var nota=5;
var reslutado=0;

if(nota>=5){
  resultado="aprobado";
}
 expect(resultado).toBe("aprobado");

  });

  it("test if sencillo nota suspenso", function() {

var nota=3;
var reslutado="";

if(nota<5){

  resultado="suspenso";
}

 expect(resultado).toBe("suspenso");

  });

  it("test if sencillo nota rango bien", function() {

var nota=6;
var reslutado="";

if(nota>=5 && nota<7){

  resultado="bien";
}

 expect(resultado).toBe("bien");

});


it ("test if con else nota else", function(){
var nota=8;
var resultado="";

if(nota>=5 && nota<7) {
resultado="bien";
}else{
resultado="no tienes un bien";
}
expect(resultado).toBe("no tienes un bien");
});



it ("test if con clausula OR", function(){
var nota=8;
var resultado="";

if(nota<2 || nota>8) {
//resultado="bien";
}else{
resultado="eres de los pocos elegidos";
}
expect(resultado).toBe("eres de los pocos elegidos");
});
});

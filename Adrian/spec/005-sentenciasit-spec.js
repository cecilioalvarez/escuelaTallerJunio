describe("Manejo de Sentencias If",function(){

it("test if sencillo",function(){
var nota=5;
var resultado=0;
if(nota>=5){

  resultado="aprobado";
}

expect(resultado).toBe("aprobado");

});
it("test if sencillo",function(){
var nota=5;
var resultado=0;
if(nota<=5){

  resultado="suspenso";
}
expect(resultado).toBe("suspenso");

});
it("test if con rango bien",function(){
var nota=6;
var resultado="";
if (nota>=5 && nota<7){

  resultado="bien";
}
expect(resultado).toBe("bien");

});
it("test if con else nota rango",function(){
var nota=8;
var resultado="";
if(nota>=5 && nota <7){

  //resultado="bien";
}else{
  resultado="no tienes un bien";
}
expect(resultado).toBe("no tienes un bien");

});

});

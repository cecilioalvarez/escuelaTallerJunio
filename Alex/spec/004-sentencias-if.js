describe("Manejo de sentencias If", function() {
  it("test if sencillo", function(){

var nota=7;
var resultado=0;
if (nota>5) {
  resultado="aprobado";

}
expect(resultado).toBe("aprobado");

});

it("test if sencillo nota suspenso", function(){
  var nota=3;
  var resultado="";
  if (nota<5) {
    resultado=()"suspenso");
  });

  it("test if sencillo nota rango bien", function(){
    var nota=6;
    var resultado="";
    if (nota>=5 && nota <7) {
      resultado="bien";

    expect(resultado).toBe("bien");
  });

  if ("test if con else nota rango", function() {
    var nota=8;
    var resultado="";
    if(nota>=5 && nota <7) {
      //resultado="bien";


  }else {
    resultado="no tienes un bien";
  }
  expect(resultado).toBe("no tienes un bien");

    });

});

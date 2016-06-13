describe("manejo de sentencias If", function() {
if("test if sencillo nota aprobado", function() {
var nota=8;
var resultado="";
if (nota>=5 && nota <7) {
resultado="aprobado";

}else{
  resultado="no tienes un bien";
}
expect(resultado).toBe("no tienes un bien");

});
it("test if sencillo con clausulas OR", function() {
  var nota=1;
  var resultado="";
  if (nota<=2 || nota <8) {
  resultado="eres de los pocos elegidos";
});

it("test suma 5 prieros pares", function() {

  var resultado=0;
  for (var i=0; i<5; i++) {

  resultado=resultado+(i*2);
}
expect(resultado).toBe(20);
});

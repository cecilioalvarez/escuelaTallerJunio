
describe ("Manejo sentencias If", function() {
it ("test if sencillo nota aprobado", function() {

var nota=5;
var resultado=0;
if (nota>=5) {
resultado="aprobado";
}
expect(resultado).toBe("aprobado");

});

describe ("Manejo sentencias If", function() {
it ("test if sencillo nota suspenso", function() {

var nota=5;
var resultado=0;
if (nota<5) {
resultado="suspenso";
}
expect(resultado).toBe("suspenso");
});

describe ("Manejo sentencias If", function() {
it ("test if sencillo nota aprobado1", function() {

var nota=6;
var resultado=0;
if (nota>=5) && (nota<7) {
resultado="bien";
}
expect(resultado).toBe("bien");
});

describe ("Manejo sentencias If", function() {
it ("test if sencillo nota else", function() {

var nota=8;
var resultado="";
if (nota>=5) && (nota<7) {
resultado="bien";
} else {
  resultado="no tienes un bien"
}
expect(resultado).toBe("no tienes un bien");
});

describe ("Manejo sentencias If", function() {
it ("test if sencillo clausula or", function() {

var nota=8;
var resultado="";
if (nota<2) || (nota>8) {
resultado="eres de los pocos elegidos";
  resultado="no tienes un bien"
}
expect(resultado).toBe("eres de los pocos elegidos");
});

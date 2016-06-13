describe("manejo de sentencias If", function() {
if("test if sencillo nota aprobado", function() {
var nota=5;
var resultado="";
if (nota>=5) {
resultado="aprobado";

}
expect(resultado).toBe("aprobado");
});

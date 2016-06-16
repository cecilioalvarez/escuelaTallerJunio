describe("Manejo de Objetos", function() {

it ("test positivo", function() {
  var numero=1;
  var resultado="";
    if (numero>=0){resultado=resultado+"positivo";}
    else{resultado=resultado+"negativo";}
expect(resultado).toBe("positivo");
});
it ("test negativo", function() {
  var numero=-4;
  var resultado="";
    if (numero>=0){resultado=resultado+"positivo";}
    else{resultado=resultado+"negativo";}
expect(resultado).toBe("negativo");
});
it("test media array", function() {

var lista=[4,5,1,3,8];
var suma=0;
for (var i = 0; i < lista.length; i++) {
suma=suma+lista[i]/5;
}
expect(suma).toBe(4.2);
});


});

describe("Manejo de Objetos", function() {

it ("test positivo", function() {
  var numero=2;
  var resultado="";
    if (numero>=0){resultado=resultado+"positivo";}
    else{resultado=resultado+"negativo";}
expect(resultado).toBe("positivo");

});

it ("test negativo", function() {
  var numero=-6;
  var resultado="";
    if (numero>=0){resultado=resultado+"positivo";}
    else{resultado=resultado+"negativo";}
expect(resultado).toBe("negativo");
});

it("test valor medio array", function() {

var lista=[4,5,7,9];
var suma=0;
for (var i = 0; i < lista.length; i++) {
suma=suma+lista[i]/4;
}
expect(suma).toBe(6.25);
});

it ("test el mayor y menor en un array", function() {
  var lista=[2,3,6,8];
  var lista2=[];
for (var i = 0; i < lista.length; i++) {
    if (lista[i]>=8){lista2.push(lista[i]);}
    else if(lista[i]<=1){lista2.push(lista[i]);}

  }
expect(lista2).toEqual([2,8]);
});

});

describe("Manejo de Objetos", function() {

it ("test positivo", function() {
  var numero=1;
  var resultado="";
    if (numero>=0){
      resultado=resultado+"positivo";
    }
    else{
      resultado=resultado+"negativo";
    }
expect(resultado).toBe("positivo");
});

it ("test negativo", function() {
  var numero=-4;
  var resultado="";
    if (numero>=0){
      resultado=resultado+"positivo";
    }
    else{
      resultado=resultado+"negativo";
    }
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

it ("test devuelve el mayor y menor en un array", function() {
  var lista=[4,5,1,3,8];
  var lista2=[];
for (var i = 0; i < lista.length; i++) {
    if (lista[i]>=8){
      lista2.push(lista[i]);
    }
    else if(lista[i]<=1){
      lista2.push(lista[i]);
    }

  }
expect(lista2).toEqual([1,8]);
});

it ("test media de un array", function() {
  var lista=[1,2,3,4,5];
  var suma=0;
  for(var i=0; i<lista.length; i++){
    suma=suma+lista[i];
  }
  var media=suma/lista.length;
  expect(media).toBe(3);

});

});

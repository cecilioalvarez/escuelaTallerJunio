describe("Manejo de Objetos", function() {

it ("test positivo", function() {
  var numero=1;
  var resultado="";
    if (numero>=0){resultado=resultado+"positivo";}
    else{resultado=resultado+"negativo";}
expect(resultado).toBe("positivo");
});
it ("test negativo", function() {
  var numero=-7;
  var resultado="";
    if (numero>=0){resultado=resultado+"positivo";}
    else{resultado=resultado+"negativo";}
expect(resultado).toBe("negativo");
});
});

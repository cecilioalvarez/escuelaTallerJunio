describe("Positivo, Negativo", function() {

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
});

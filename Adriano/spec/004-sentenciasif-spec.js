describe("Manejo de Sentencias If", function(){

  it("Test if sencillo aprobado", function(){

    var nota=5;
    var resultado="aprobado";
    if (nota>=5) {

      resultado="aprobado";
    }
    expect(resultado).toBe("aprobado");
  });
  it("Test if sencillo Suspenso", function(){

    var nota=3;
    var resultado="Suspenso";
    if (nota<5) {

      resultado="Suspenso";
    }
    expect(resultado).toBe("Suspenso");
  });

  it("Test if sencillo nota rango bien", function(){

    var nota=6;
    var resultado="";
    if (nota >=5 && nota<7) {

      resultado= "Bien";
    }
    expect(resultado).toBe("Bien");

  });
  it("Test if con else nota rango", function(){

    var nota=8;
    var resultado="";

    if (nota >=5 && nota<7) {

}else{
      resultado="No tienes un Bien";
    }
    expect(resultado).toBe("No tienes un Bien");
  });

});

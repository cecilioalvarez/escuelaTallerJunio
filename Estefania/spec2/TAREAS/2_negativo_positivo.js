var operaciones=require("./sumar.js");

describe(" media array", function() {

  it ("positivo negativo", function() {
    var nota=7;
    var resultado="";
    if(nota>=(-1) && nota<0){
      resultado="positivo";
    }else {
      resultado="negativo";
    }
    expect(resultado).toBe("negativo");
  });
  });

});

var operaciones=require("./sumar.js");

describe(" media array", function() {

  it ("media array", function() {

    var lista=[4,2,2,5,7];
    var suma=0;
    for (var i=0;i<lista.length;i++){
      suma=suma+lista[i];
  }
    var media=suma/lista.length;
    expect(media).toBe(4);
  });

});

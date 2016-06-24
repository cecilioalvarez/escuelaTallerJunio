var operaciones=require("./sumar.js");

describe(" menor y mayor array", function() {

  it ("menor y mayor del array", function() {

    var lista=[4,2,6,7];
    var menor=lista[0];
    var mayor=lista[0];
    for (var i=0;i<lista.length;i++){
      if (menor>lista[i]){
        menor=lista[i];
        (mayor<lista[i]){
          mayor=lista[i];

        }
      }
      }

    }
    expect(menor).toBe(2);
    expect(mayor).toBe(7);
  });

});



total=0;
		for ($i=0;$i<count($lista);$i++){

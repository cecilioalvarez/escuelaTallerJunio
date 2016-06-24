var operaciones=require("./sumar.js");

describe(" media array", function() {

it ("suma arrays", function() {

  var lista=[4,2,5,7,5];
  var lista2=[3,4,5,6,6];
  for (var i=0;i<lista.length;i++){
    lista2.push(lista[i]+lista[i]);
  }
  expect(lista2).toEqual([16,4,25,49,25]);
});
  });

});

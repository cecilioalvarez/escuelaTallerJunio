describe("Media de un array", function() {

  it("test media array", function() {

  var lista=[4,5,1,3,8];
  var suma=0;
  for (var i = 0; i < lista.length; i++) {
  suma=suma+lista[i]/lista.length;
  }
  expect(suma).toBe(4.2);
  });
});

  it ("test devuelve el mayor y menor en un array", function() {
    var lista=[4,5,1,3,8];
    var lista2=[];
  for (var i = 0; i < lista.length; i++) {
      if (lista[i]>=8){lista2.push(lista[i]);}
      else if(lista[i]<=1){lista2.push(lista[i]);}
    }
  expect(lista2).toEqual([1,8]);

  });
});

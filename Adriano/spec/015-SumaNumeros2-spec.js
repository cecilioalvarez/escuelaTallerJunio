
describe(" Manejo de arrays", function () {

  it ("test mayores que 3 copiar el array", function() {
    var lista=[1,2,3,4,5];
    var lista2=[];
    for (var i=0;i<lista.length;i++) {
      if(lista[i]>=3) {

      lista2.push(lista[i]);
    }
  }
    console.log(lista2);
    expect(lista2.length).toBe(3);
  });

  });

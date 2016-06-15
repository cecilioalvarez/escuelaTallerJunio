
describe(" Manejo de arrays", function () {

  it ("test nuevo array suficiente o insuficiente", function() {
    var lista=[2,4,6,8];
    var lista2=[];
    for (var i=0;i<lista.length;i++) {


      lista2.push(lista[i]*2);
      }

    expect(lista2).toEqual([2,4,6,8]);
  });

  });

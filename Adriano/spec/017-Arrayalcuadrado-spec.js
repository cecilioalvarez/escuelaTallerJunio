
describe(" Manejo de arrays", function () {

  it ("test nuevo array *2", function() {
    var lista=[1,2,3,4,5];
    var lista2=[];
    for (var i=0;i<lista.length;i++) {


      lista2.push(lista[i]*2);
      }

    expect(lista2).toEqual([2,4,6,8,10]);
  });

  });


describe(" Manejo de arrays", function () {

  it ("test duplicar el array al reves", function() {
    var lista=[1,2,3,4,5];
    var lista2=[];
    for (var i=lista.length-1;i>=0;i--) {


      lista2.push(lista[i]);
      }

    expect(lista2).toEqual([5,4,3,2,1]);
  });

  });

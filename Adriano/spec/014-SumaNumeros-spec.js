
describe(" Manejo de arrays", function () {

  it ("test añadir al array", function() {
    var lista=[1,2,3,4,5];
    var lista2=[];
    for (var i=0;i<lista.length;i++) {

      lista2.push(lista[i]);
    }
    console.log(lista2);
    expect(lista.length).toBe(lista2.length);

    expect(lista).toEqual(lista2);
  });

  });

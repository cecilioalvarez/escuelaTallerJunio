
describe(" Manejo de arrays", function () {

  it ("test añadir al array", function() {
    var lista=[1,2,3,4,5];

    expect(lista.length).toBe(5);
    lista.push(1);
    expect(lista.length).toBe(6);
  });

  });

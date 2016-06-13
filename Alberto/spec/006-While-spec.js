
describe ("Conjunto test", function() {

  it ("test suma pares while", function() {
    var inicio=0;
    // Bucle //
    while (inicio<20) {
      inicio=inicio + 2;
    }
    expect(inicio).toBe(20);
  });

});

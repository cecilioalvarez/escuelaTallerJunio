
describe ("Bucle for", function() {
  it ("Suma bucle for pares", function() {
    var suma=0;
    for (i=0; i<10; i=i+2) {
      suma=suma+i;
    }
      expect(suma).toBe(20);
  });
});

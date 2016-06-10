
describe ("Bucle for", function() {
  it ("Suma bucle for", function() {
    var suma=0;
    for (i=0; i<10; i++) {
      suma=suma+i;
    }
      expect(suma).toBe(45);
  });
});

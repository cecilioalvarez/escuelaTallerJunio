
describe ("Bucle for negativo", function() {
  it ("Suma bucle for negativo", function() {
    var suma=0;
    for (i=0; i>-10; i--) {
      suma=suma+i;
    }
      expect(suma).toBe(-45);
  });
});

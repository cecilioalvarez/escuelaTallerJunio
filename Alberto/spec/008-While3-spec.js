
describe ("Manejo de bucle while", function() {

  it ("test bucle for suma 10 items", function() {
    var i=0;
    var suma=0;
  do {
     	suma=suma+i;
      i++;
  } while (i<10)

  expect(suma).toBe(45);
});
});


describe("Manejo de buche while", function() {

  it("test bucle for suma 10 items", function() {

    var i=0;
    var suma=0;

    while(i<10) {
      suma=suma+i;
      i++;


    }

 expect(suma).toBe(45);

  });


});

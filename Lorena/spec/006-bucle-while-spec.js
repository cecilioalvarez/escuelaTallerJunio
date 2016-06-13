describe("manejo de bucle while ", function() {

    it("test bucle while suma 1 a 10", function() {
        var suma = 0;
        while (suma<10) {
            suma = suma + 1;
        }
        expect(suma).toBe(10);
    });

  it("test bucle while suma de los 10 primeros", function() {
    var i=0;
      var suma = 0;
      while (i<10) {
          suma = suma + i;
          i++;
      }
      expect(suma).toBe(45);
  });
});

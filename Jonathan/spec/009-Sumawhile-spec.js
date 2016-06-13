describe("Suma Bucle While", function() {


    it("Test suma 10 primeros itemss", function() {
        var total = 0;
        var i=0;
        do {
          total = total + (i);
          i++;
        }
        while (i <10)
        expect(total).toBe(45);
    });


});

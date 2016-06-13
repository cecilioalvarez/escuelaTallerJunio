describe("Pares Bucle For", function() {


    it("Test suma 5 primeros pares", function() {
        var total = 0;
        var i=0;
        while (i <5) {
            console.log(i*2);
            total = total + (i*2);
            i++;
        }

        expect(total).toBe(20);
    });


});

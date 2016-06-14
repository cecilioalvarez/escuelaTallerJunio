describe("test array", function() {


    it("test media del array", function() {
        var lista=[4,5,6];
        var suma=0
        for(var i=0;i<lista.length;i++){
            suma=suma+lista[i]
        }
        var media=suma/lista.length
        expect(media).toBe(5);
    });



});

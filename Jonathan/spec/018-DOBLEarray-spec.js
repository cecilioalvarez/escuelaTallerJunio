describe("test array", function() {

    it("test doble array", function() {
        var lista=[1,2,3,4,5];
        var lista2=[];
        for (var i=0;i<lista.length;i++){
          lista2.push(lista[i])
        }

        expect(lista).toEqual(lista2);
    });



});

describe("test array", function() {


    it("test repe del array", function() {
        var lista=[2,2,3,5,1,7,9,6];
        var suma=0
        for(var i=0;i<lista.length;i++){
          if (lista[i]>5){
            suma=suma+lista[i]
          }
        }
        expect(suma).toBe(22);
    });



});

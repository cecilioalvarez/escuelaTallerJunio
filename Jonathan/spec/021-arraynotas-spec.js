describe("test array", function() {

    it("test doble array", function() {
        var lista=[1,2,3,4,5,6,7,8,9,10];
        var lista2=[];
        for (var i=0;i<lista.length;i++){
          if (lista[i]<5){
          lista2.push("suspenso")
        }else if (lista[i]==5) {
          lista2.push("suficiente")
        }else if (lista[i]==6) {
          lista2.push("bien")
        }else if (lista[i]>6 && lista[i]<=8) {
          lista2.push("notable")
        }else{
          lista2.push("sobresaliente")
        }
        }

        expect(lista2).toEqual(["suspenso","suspenso","suspenso","suspenso","suficiente","bien","notable","notable","sobresaliente","sobresaliente"]);
    });



});

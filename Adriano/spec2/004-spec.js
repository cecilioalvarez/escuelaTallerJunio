describe("test array", function() {

    it("test doble array", function() {

      var lista=[];

      for (var i=1;i<=5;i++){
        lista.push(i)
      }

        var lista2=[];

      for (var i=lista.length-1;i>=0;i--){
          lista2.push(lista[i])
        }
        expect(lista).toEqual([1,2,3,4,5]);
        expect(lista2).toEqual([5,4,3,2,1]);
    });



});

describe("test array", function() {


    it("test suma de los array", function() {
        var lista1=[1,2,3,4];
        var lista2=[1,2,3,4];
        var suma=0;
        var listaSuma=[];
        for(var i=0;i<lista1.length;i++){
          suma=lista1[i]+lista2[i]
          listaSuma.push(suma)
          }
        expect(listaSuma).toEqual([2,4,6,8]);
        suma=0
        for(var i=0;i<listaSuma.length;i++){
              suma=suma+listaSuma[i]
        }
        var media=suma/listaSuma.length
        expect(media).toBe(5);
    });
});

describe("manejo de parse ", function() {

    it("test crear array suma de arrays", function() {
var lista=[1,2,3,4,5];
var lista2=[1,2,3,4,5];
var lista3=[];

for (var i=0;i<lista.length;i++) {

lista3.push(lista[i]+lista2[i]);

}
expect(lista3).toEqual([2,4,6,8,10]);
    });
    
});

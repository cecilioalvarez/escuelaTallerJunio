it("copiar mayor 3", function() {
var lista=[1,2,3,4,5,6];
var lista2=[]
for(var i=0; i<lista.length;i++) {
if(lista[i]>=3) {
  lista2.push(lista[i]);
}
}
expect(lista2.length).toBe(3);

});

describe("testarrays",function(){
it ("test duplicar el array", function() {
  var lista=[1,2,3,4,5];
var lista2=[];
for( var i=0;i<lista.length;i++){
  lista2.push(lista[i]);
}
expect(lista.length).toBe(lista2.length);
expect(lista).toEqual(lista2);


});
});

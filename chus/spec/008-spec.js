describe ("Array", function(){
  it ("recorrer una Array", function() {
var lista=[1,2,3,4,5,6,7,8,9];
expect(lista.length).toBeDefined(10);
});
  it ("sumar una Array", function() {
var lista=[1,2,3,4,5,6,7,8,9];
var suma=0;
for (i=0;i<lista.length;i++){
  suma=suma+i;
}
expect(lista.length).toBeDefined(10);
});
});

it("copiar mayor 3"), function() {
var lista=[1,2,3,4,5,6];
var lista2=[]
for(var i=0; i<lista.length; i++) {
if(lista[i]>=3) {
  lista2.push(lista[i]);
}
}
expect(lista2.length).toBe(3);
});
});
it("recorrer array hacia atras"), function() {
var lista=[1,2,3,4,5,6];
for(var i=lista.lenght; i>=0;i--) {
if(lista[i]>=3) {
  lista2.push(lista[i]);
}
}
expect(texto).toEqual("6,5,4,3,2,1");

});


it("test push array a otro array"), function() {
var lista=[1,2,3,4,5,6];
for(var i=lista.lenght; i>=0;i--) {
if(lista[i]>=3) {
  lista2.push(lista[i]);
}
}
expect(lista2.length).toBe(3);

});

it("test nuevo array*2"), function() {
var lista=[1,2,3,4,5,6];
var lista2=[;]
for(var i=lista.lenght; i++) {
if(lista[i]>=3) {
  lista2.push(lista[i]*2);
}
}
expect(lista).toEqual([2,4,6,8,10]);

});

it("test nuevo array*2"), function() {
var lista=[1,2,3,4,5,6];
var lista2=[;]
for(var i=lista.lenght; i++) {
if(lista[i]>=3) {
  lista2.push(lista[i]*2);
}
}
expect(lista).toEqual([2,4,6,8,10]);

});

describe("Manejo  bucle negativo", function() {
    it("test suma 10 numeros negativos", function() {

        var suma=0;

        for (var i = 0; i >10; i--) {
          suma=suma+i;
        }
        expect(suma).toBe(-45);
    });
});
 var lista=[1,2,3,4,5];
 var suma=0;
   for (var i = 0; i <lista.length; i++) {
 suma=suma+lista[i];
}
var media=suma/lista.length;
expect(media).toBe(3);
});
it("test añadir al array", function() {
var lista=[1,2,3,4,5];
expect(lista.length).toBe(5);
lista.push(6);
expect(lista.length).toBe(6);
});
var lista=[1,2,3,4,5];
var lista2=[];
for (var i = 0; i <lista.length; i++) {
  lista2.push(lista[i]);
}
console.log(lista2);
expect(lista.length).toBe(lista2.length);
expect(lista).toEqual(lista2);
});

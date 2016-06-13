describe("arrays", function() {

    it("test longitud array", function() {
        var lista = [1, 2, 3];
        expect(lista.length).toBe(3);



    });
    it("test suma items del array", function() {
        var lista = [1, 2, 3];
        var suma = 0;
        for (var i = 0; i < lista.length; i++) {
            suma = suma + lista[i];
        }
        expect(suma).toBe(6);

});
it ("test suma items del array",function(){
var lista=[1,2,3];
var suma=0;
for (var i=0; i<lista.length; i++){
  suma=suma+lista[i];
}
expect(suma).toBe(6);

    });

    it("test el menor del arrray", function() {
        var lista = [2,2,3,5,1];

        var menor=lista[0];

        for (var i = 0; i < lista.length; i++) {
            if (lista[i]< menor) {
              menor=lista[i];
            }
        }
        expect(menor).toBe(1);

    });
});

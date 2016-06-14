describe("manejo de arrays",function() {


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

it("test menor numero array", function() {
    var lista = [2, 2, 3, 5, 1];
    var menor = lista[0];

    for (var i = 0; i < lista.length; i++) {
        if (lista[i] < menor) {
            menor = lista[i];
        }
    }
    expect(menor).toBe(1);

});

it("test numero de veces que sale el 2", function() {
    var lista = [2, 2, 3, 4, 5];
    var elemento = 2;
    var contador = 0;
    for (var i = 0; i < lista.length; i++) {
        if (elemento == lista[i]) {
            contador++;
        }
    }
    expect(contador).toBe(2);

});

it("test suma de números mayores de 5", function() {
    var lista=[1,2,3,5,9,10];
    contador=5;
    suma=0;
    for (var i = 0; i < lista.length; i++) {

      if (lista[i]>=contador) {
        suma=suma+lista[i];
    }
    }
    expect(suma).toBe(24);
        });

it("test suma y la media", function() {
    var lista = [1, 2, 3, 4, 5];
    var suma = 0;
    for (var i = 0; i < lista.length; i++) {

        suma = suma + lista[i];
    }

    var media = suma / lista.length;
    expect(media).toBe(3);


});

it("test añadir al array", function() {
    var lista = [1, 2, 3, 4, 5];

    expect(lista.length).toBe(5);
    lista.push(6);
    expect(lista.length).toBe(6);

});

it("test duplicar array", function() {

    //bloque de código
    var lista = [1, 2, 3, 4, 5];
    var lista2 = [];
    for (var i = 0; i < lista.length; i++) {

        lista2.push(lista[i]);

    }

    expect(lista.length).toBe(lista2.length); //validacion simple
    expect(lista).toEqual(lista2);

});

it("test duplicar el array con numeros mayores de 3", function() {

    //bloque de código
    var lista = [1, 2, 3, 4, 5];
    var lista2 = [];
    for (var i = 0; i < lista.length; i++) {

        if (lista[i] >= 3) {
            lista2.push(lista[i]);

        }
    }
    expect(lista2.length).toBe(3); //validacion simple

});
});

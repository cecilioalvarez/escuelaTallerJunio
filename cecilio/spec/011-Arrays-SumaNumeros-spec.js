describe("Manejo  de arrays", function() {

    it("test suma numeros mayor que 5", function() {

        var lista = [1, 2, 3,4,5,6];
        var suma=0;
        for(var i=0;i<lista.length;i++) {
            if (lista[i]>=5) {
                suma= suma+lista[i];
            }
        }
        expect(suma).toBe(11);


    });

    it("test suma 10 numeros negativos", function() {


        var suma=0;
        for(var i=0;i> -10;i--) {
            suma=suma+i;
        }
        expect(suma).toBe(-45);


    });

    it("test media de un array", function() {

        var lista=[1,2,3,4,5];
        var suma=0;
        for(var i=0;i<lista.length;i++) {
            suma=suma+lista[i];
        }
        var media=suma/lista.length;
        expect(media).toBe(3);

    });

    it("test añadir al array", function() {

        var lista=[1,2,3,4,5];

        expect(lista.length).toBe(5);
        lista.push(1);
        expect(lista.length).toBe(6);

    });
    it("test duplicar el array", function() {

        var lista=[1,2,3,4,5];
        var lista2=[];
        for (var i=0;i<lista.length;i++) {

            lista2.push(lista[i]);
        }
        console.log(lista2);
        expect(lista.length).toBe(lista2.length);
        expect(lista).toEqual(lista2);

    });
    it("test mayores que 3 copiar el array", function() {

        var lista=[1,2,3,4,5];
        var lista2=[];
        for (var i=0;i<lista.length;i++) {
                if(lista[i]>=3) {
                    lista2.push(lista[i]);
                }

        }

        expect(lista2.length).toBe(3);

    });

    it("test recorrer array al reves", function() {

        var lista=[1,2,3,4,5];
        var texto="";
        for (var i=lista.length-1;i>=0;i--) {

                texto=texto+lista[i];

        }

        expect(texto).toEqual("54321");

    });

    it("test duplicar el array al reves", function() {

        var lista=[1,2,3,4,5];
        var lista2=[];
        for (var i=lista.length-1;i>=0;i--) {

                lista2.push(lista[i]);

        }

        expect(lista2).toEqual([5,4,3,2,1]);

    });

    it("test nuevo array *2", function() {

        var lista=[1,2,3,4,5];
        var lista2=[];
        for (var i=0;i<lista.length;i++) {

                lista2.push(lista[i]*2);

        }

        expect(lista2).toEqual([2,4,6,8,10]);

    });











});

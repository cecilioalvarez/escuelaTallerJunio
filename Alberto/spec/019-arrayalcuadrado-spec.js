
describe("Array suspenso aprobado", function() {
      it("Array suspenso aprobado", function() {
          var lista = [2, 4, 6, 8, 10];
          var lista2 = [];
          for (var i = 0; i < lista.length; i++) {

              if (lista[i] <= 2) {
                  lista2.push("muy mal");
              } else if (lista[i] >= 2 && lista[i] <= 4) {
                  lista2.push("mal");
              } else if (lista[i] >= 5 && lista[i] <= 6) {
                  lista2.push("bien");
              } else if (lista[i] >= 7 && lista[i] <= 8) {
                  lista2.push("notable");
              } else {
                  lista2.push("sobresaliente");
              }
          }
          expect(lista2).toEqual(["muy mal", "mal", "bien", "notable", "sobresaliente"]);
      });
  });

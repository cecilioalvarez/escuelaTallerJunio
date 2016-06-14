
describe("Array suspenso aprobado", function() {
    it("Array suspenso aprobado", function() {
        var array = [2,4,6,8,10];
        var array2 = [];
        for (i=0; i<array.length; i++) {
          if (array[i]>=2) {
              array2.push('Estas suspenso');
          } else if (array[i]>=2 && array[i]<=4) {
              array2.push('Casi pero no');
          } else if (array[i]>=5 && array[i]<=6) {
              array2.push('Podrías hacerlo mejor');
          } else if (array[i]>=7 && array[i]<=8) {
              array2.push('Sigue así');
          } else {
              array2.push('Dame la chuleta, anda');
          }
  }
        expect(array2).toEqual(["Estas suspenso","Casi pero no","Podrias hacerlo mejor","Sigue así","Dame la chuleta, anda"]);
    });
});

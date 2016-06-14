
describe ("Media de arrays", function() {
it ("Media array", function() {
  var array=[1,2,3,4,5];
  var suma=0;
  for (i=0;i<array.length; i++) {
    suma=suma+array[i];
  }
  var media=suma/array.length;
expect(media).toBe(3);
});
});


describe ("Array push duplicado", function() {
it ("Array push duplicado", function() {
  var array=[1,2,3,4,5];
  var array2=[];
  for (var i=0; i<array.length; i++) {
  array2.push(array[i]);
}
expect(array2.length).toBe(array.length);
expect(array).toEqual(array2);
});
});

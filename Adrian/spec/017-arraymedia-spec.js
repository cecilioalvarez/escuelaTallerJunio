describe("testarrays",function(){
it ("test media lista", function() {

  var lista=[4,2,6];
  var suma=0;
  for (var i=0;i<lista.length;i++){
      suma=suma+lista[i];

}
var media=suma/lista.length;
  expect(media).toBe(4);
});
});

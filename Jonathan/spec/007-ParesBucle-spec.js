
describe("Pares Bucle For", function() {


  it("Test suma 5 primeros pares", function() {
    var total=0
  for(i=0;i<=10;i=i+2){
    total=total+i
  }

  expect(total).toBe(30);
  });


});

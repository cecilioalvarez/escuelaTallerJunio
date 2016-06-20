var mayorarray= function mayorarray (array1,array2) {
var suma1=0;
var suma2=0;

for (var i=0;i<array1.length;i++){
   suma1=suma1+array1[i];


}
for (var j=0;j<array2.length;j++){
   suma2=suma2+array2[j];


}
if (suma1>suma2){
  return suma1;
}else {
  return suma2;
}
console.log (suma1,suma2);
};

exports.mayorarray=mayorarray;

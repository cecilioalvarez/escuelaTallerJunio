var mediaarray= function mediaarray (array1) {
  var suma=0;
  var media=0;
for (var i=0;i<array1.length;i++){
suma=suma+array1[i];
}
media=suma/array1.length;
return media;
};

exports.mediaarray=mediaarray;

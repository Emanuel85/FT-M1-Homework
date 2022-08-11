'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var pos=0;
  var suma=0;
  for(var i=num.length-1;i>=0;i--){
     suma+=(Math.pow(2,pos)*num[i])
     pos++
    }
  return suma
  
  //Otra solucion
  //var suma=0
  // for(i=0;i<num.length;i++)
  // sum+= Mat.pow(2,num.length-1-i)*num[i] <== num.length=4 - 1 - i=0 esto seria 4-1-0= 3 que es la posicion del primer valor a usar para elevar
  //return suma

}

function DecimalABinario(num) {
  var array=[]
 
  for(var i=0; num!=0 ;i++){
    array.unshift(num%2)
    num=Math.floor(num/2) 
  }
  
  return array.join("")
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}
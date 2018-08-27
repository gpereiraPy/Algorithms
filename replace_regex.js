function spinalCase(str) {
 
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  //hay un espacio entre $1 y $2, y es lo q se inserta para
  //terminar separando las palabras
  
  console.log(str);

  let regex= /[\s_[a-z][A-z]]/g
  return str.toLowerCase().replace(regex,"-");
}

console.log(spinalCase('ThisIsSpinalTap'));
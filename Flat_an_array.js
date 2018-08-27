function steamrollArray(arr) {
  // I'm a steamroller, baby
let newArr=[];
let flat = function(arr){
  arr.forEach(function(elem){
    if(Array.isArray(elem)){
      
      flat(elem);
    }else{
      newArr.push(elem);
    }
  });
}

flat(arr);

return newArr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));




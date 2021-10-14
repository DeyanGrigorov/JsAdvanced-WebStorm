// function add(x) {
//   return function(y) {
//     if (typeof y !== 'undefined') {
//       x = x + y;
//       return arguments.callee;
//     } else {
//       return x;
//     }
//   };
// }
function sum(num){
  let sum = num;
  function add(num2){
    sum +=num2;
    return add
  }
  add.toString = () =>{
    return sum
  }
  return add;
}


console.log(sum(1)(6)(-3).toString())
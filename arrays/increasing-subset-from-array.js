function increasingSubsetFromArray (array) {
  let biggest = Number.MIN_SAFE_INTEGER;
  const result = [];
  array.reduce((accumulator, current) => {
      if (current >= biggest) {
        biggest = current;
        accumulator.push(current);

      }
      return accumulator;
    }
    , result
  );
  return result;
}

//   let biggest = Number.MIN_SAFE_INTEGER;
//   return array.filter((el) => {
//     if (el > biggest) {
//       biggest = el;
//       return true;
//
//     }
//     return false;
//   });
// }

console.log(increasingSubsetFromArray([1,
  3,
  8,
  4,
  10,
  12,
  3,
  2,
  24]));



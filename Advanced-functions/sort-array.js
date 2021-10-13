function sortedArray (array, arg) {
  if (arg === 'asc') {
    array.sort((a, b) => a - b);
    return array;
  } else if (arg === 'desc') {
    array.sort((a, b) => b - a);
    return array;
  }
}

console.log(sortedArray([14, 7, 17, 6, 8], 'asc'))
console.log(sortedArray([14, 7, 17, 6, 8], 'desc'))
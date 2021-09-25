function stepArray(array, step) {
  let newArray = [];
  for (let i = 0; i < array.length; i += step) {
    newArray.push(array[i]);
  }
  return newArray;
}

console.log(stepArray(['5',
    '20',
    '31',
    '4',
    '20'],
  2))
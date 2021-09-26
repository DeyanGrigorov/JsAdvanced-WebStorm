function rotateArray (array, rotationTimes) {
  for (let i = 0; i < rotationTimes; i++) {
    let num = array.pop();
    array.unshift(num);
  }
  console.log(array.join(' '));
}

rotateArray(['1',
    '2',
    '3',
    '4'],
  2);

rotateArray(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
  15);
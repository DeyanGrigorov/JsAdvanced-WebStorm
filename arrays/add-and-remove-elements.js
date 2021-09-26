function addAndRemoveElements (array) {
  let initialCmd = 0;
  let newArray = [];

  for (let cmd in array) {
    initialCmd += 1;
    if (array[cmd] === 'add') {
      newArray.push(initialCmd);
    } else if (array[cmd] === 'remove') {
      newArray.pop();
    }
  }
  if (newArray.length === 0) {
    console.log('Empty');
  } else {
    console.log(newArray.join('\n'));
  }

}

addAndRemoveElements(['add',
  'add',
  'add',
  'add']);

addAndRemoveElements(['add',
  'add',
  'remove',
  'add',
  'add']);

addAndRemoveElements(['remove',
  'remove',
  'remove']);
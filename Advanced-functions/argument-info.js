function argumentInfo (...args) {
  let obj = {};
  for (let el of args) {
    console.log(`${typeof el}: ${el}`);
    if (!obj[typeof (el)]) {
      obj[typeof (el)] = 1;
    } else {
      obj[typeof (el)]++;
    }

  }
  Object.keys(obj).sort((a, b) => obj[b] - obj[a])
    .forEach(k => console.log(`${k} = ${obj[k]}`));
}

argumentInfo('cat', 'dog', 42, 15, function () { console.log('Hello world!'); });
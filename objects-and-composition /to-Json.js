function toJson (array) {
  const result = [];
  const split = array[0].split('|');
  const town = split[1].trim();
  const latitude = split[2].trim();
  const longitude = split[3].trim();
  for (let i = 1; i < array.length; i++) {
    const obj = {};
    const splitEntry = array[i].split('|');
    obj[town] = splitEntry[1].trim();
    obj[latitude] = Number(Number(splitEntry[2].trim()).toFixed(2));
    obj[longitude] = Number(Number(splitEntry[3].trim()).toFixed(2));
    result.push(obj);
  }
  return JSON.stringify(result);
}

console.log(toJson(['| Town | Latitude | Longitude |',
  '| Sofia | 42.696552 | 23.32601 |',
  '| Beijing | 39.913818 | 116.363625 |']));
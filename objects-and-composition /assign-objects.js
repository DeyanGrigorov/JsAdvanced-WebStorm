function assign (array) {
  const obj = {};
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      obj[array[i]] = Number(array[i + 1]);
    }
  }
  console.log(obj);
}

assign(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']
);
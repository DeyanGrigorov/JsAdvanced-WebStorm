function sorting (array) {
  const newArr = array.sort((a,b) => a.localeCompare(b));


  for (let i = 1; i <= newArr.length; i++) {
    console.log(`${i}.${newArr[i - 1]}`);
  }
  // let orderNum = 1;
  // array.forEach((el) => {
  //   console.log(`${orderNum}.${el}`);
  //   orderNum++;
  // });
}

sorting(['John', 'Bob', 'Christina', 'Ema']);
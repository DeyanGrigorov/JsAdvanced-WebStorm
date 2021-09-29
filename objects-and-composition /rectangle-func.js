function rectangle (width, height, color) {
  let leftStr = color.slice(1);

  return {
    width,
    height,
    color: color.charAt(0).toUpperCase() + leftStr,
    calcArea: function () {
      return width * height;
    }
  };
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
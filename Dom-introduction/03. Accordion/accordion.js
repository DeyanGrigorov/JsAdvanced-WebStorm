function toggle () {
  const button = document.querySelector('.button');
  const textDiv = document.getElementById('extra');

  button.textContent = button.textContent === 'More' ? 'Less' : 'More';
  textDiv.style.display = textDiv.style.display === 'none' || textDiv.style.display === '' ? 'block' : textDiv.style.display = 'none';

  console.log(button);
}



function addItem () {

  const htmlElements = {
    text: document.getElementById('newItemText'),
    value: document.getElementById('newItemValue'),
    menu: document.getElementById('menu')
  };

  const newOption = (htmlElements.text.value + ' ' + htmlElements.value.value);
  const option = document.createElement('option');
  option.innerText = newOption;

  htmlElements.menu.appendChild(option);

  htmlElements.text.value = '';
  htmlElements.value.value = '';

}
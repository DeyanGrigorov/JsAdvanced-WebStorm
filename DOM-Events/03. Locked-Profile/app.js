function lockedProfile () {
  Array.from(document.querySelectorAll('.profile button')).forEach(b => b.addEventListener('click',
    onToggle
  ))
  ;

}

function onToggle (e) {
  const infoDif = Array.from(e.target.parentElement.querySelectorAll('div'))
    .find(d => d.id.includes('HiddenFields'));

  if (e.target.textContent === 'Show more') {
    infoDif.style.display = 'block';
    e.target.textContent = 'Hide it';
  } else {
    infoDif.style.display = '';
    e.target.textContent = 'Show more';
  }


}
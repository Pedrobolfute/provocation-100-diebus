let plusButton = document.querySelectorAll('.grid');

  plusButton.forEach(button => {

  button.addEventListener('click', (e) => {
  button.classList.toggle('anotherframe');
  });
});
//unfineshed
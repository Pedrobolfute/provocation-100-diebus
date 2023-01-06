const inputSearch = document.querySelector('[data-input]');
const autocompleteBox = document.querySelector('[data-autocomplete-box]');

function generateAutocompleteBox(searchedText){
  const autocompleteBox = `
  <li>
    <span class="highlight">${searchedText}</span> is awesome.
  </li>
  <li>
    where to learn <span class="highlight">${searchedText}</span>?
  </li>
  <li>
    What's <span class="highlight">${searchedText}</span>?
  </li>
  `;
autocompleteBox.insertAdjacentHTML('afterbegin', autocompleteTemplate);
}

inputSearch.addEventListener('input', (event)=> {
  const searchedText = event.target.value;
  autocompleteBox.innerHTML = '';
  if(searchedText.length){
    autocompleteBox.classList.add('active');
    generateAutocompleteBox(searchedText);
  } else{
    autocompleteBox.classList.remove('active');
  }
})
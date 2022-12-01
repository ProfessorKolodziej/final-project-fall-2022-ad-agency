// Add your scripts here
const url = 'https://api.baserow.io/api/database/rows/table/115440/?user_field_names=true';

const list = document.querySelector('#list');

fetch(url, { headers: { Authorization: `Token woLMVJy43hZwBu44UBVYVabQyulxwTOw` } })
  .then(response => response.json())
  .then(function(data) {
    for ( let i = 0; i < data.results.length; i++ ) {
      console.log(data.results[i]);
      
      const markup = `<li>
        <h2>${data.results[i]["Agency Name"][img.src]}</h2>
      </li>`
      list.insertAdjacentHTML('beforeend', markup);
    }
});
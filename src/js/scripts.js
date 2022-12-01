const url = 'https://api.baserow.io/api/database/rows/table/115440/?user_field_names=true';

const list = document.querySelector('#list');

fetch(url, { headers: { Authorization: `Token woLMVJy43hZwBu44UBVYVabQyulxwTOw` } })
  .then(response => response.json())
  .then(function(data) {
    for ( let i = 0; i < data.results.length; i++ ) {
      console.log(data.results[i]);
      
      const markup = `<li>
        <div class="Logos">${data.results[i]["Logos"][0].url}</div> 
        <h2>${data.results[i]["Agency Name"]}</h2> 
        <div class="Locations">${data.results[i]["Locations"]}</div> 
      </li>`
      
       list.insertAdjacentHTML('beforeend', markup);
    }
});
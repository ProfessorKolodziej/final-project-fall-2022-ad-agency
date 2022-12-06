const url = 'https://api.baserow.io/api/database/rows/table/115440/?user_field_names=true';

const list = document.querySelector('#list');
let storedData = null;
async function getData() {
	await fetch(url, { headers: { Authorization: 'Token woLMVJy43hZwBu44UBVYVabQyulxwTOw' } })
		.then((response) => response.json())
		.then((data) => {
			storedData = data.results;
			// eslint-disable-next-line
		for (let i = 0; i < storedData.length; i++) {
				console.log(storedData[i]);

				const markup = `<li>
        <img class="Logos" src = ${storedData[i].Logos[0].url}>
        <h2>${storedData[i]['Agency Name']}</h2> 
        <div class="Locations">${storedData[i].Locations}</div>
      </li>`;

				list.insertAdjacentHTML('beforeend', markup);
			}
		});
}
// eslint-disable-next-line
getData().then((result) => {
	const filtered = storedData.filter((item) => item['Agency Name'] === 'BBDO');
	console.log(filtered);
});

const url = 'https://api.baserow.io/api/database/rows/table/115440/?user_field_names=true';

const list = document.querySelector('#list');
let storedData = null;
function buildHTML(data) {
	// eslint-disable-next-line
	for (let i = 0; i < data.length; i++) {
		console.log(data[i]);

		const markup = `<li>
<img class="Logos" src = ${data[i].Logos[0].url}>
<h2>${data[i]['Agency Name']}</h2> 
<div class="Locations">${data[i].Locations}</div>
</li>`;

		list.insertAdjacentHTML('beforeend', markup);
	}
}
async function getData() {
	await fetch(url, { headers: { Authorization: 'Token woLMVJy43hZwBu44UBVYVabQyulxwTOw' } })
		.then((response) => response.json())
		.then((data) => {
			storedData = data.results;
			buildHTML(storedData);
		});
}
// eslint-disable-next-line
getData().then((result) => {
	const filtered = storedData.filter((item) => item.Locations.includes('Boston'));
	buildHTML(filtered);
	console.log(filtered);
});

const { run } = require('jest');

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
			// buildHTML(storedData);
			return storedData;
		});
}
/*
let x = "all";

let changeBoston = () => {
	x = "boston";
}

let buildBoston = () => {
	const filtered = storedData.filter((item) => item.Locations.includes('Boston'));
	buildHTML(filtered);
	console.log(filtered);
}

let buildAll = () => {
	buildHTML(storedData);
	console.log(storedData);
}

function build(){
	if (x == "all"){
		buildAll();
	}
	else{
		buildBoston();
	}
}
*/
// eslint-disable-next-line

// onclick = buildBoston()
getData().then((result) => {
	const filtered = storedData.filter((item) => item.Locations.includes('Boston'));
	buildHTML(filtered);
	console.log(filtered);
});

// <input type="button">
// <button>

fetch(url, { headers: { Authorization: 'Token woLMVJy43hZwBu44UBVYVabQyulxwTOw' } })
	.then((response) => response.json())
	.then((data) => {
		for (let i = 0; i < data.results.length; i++) {
			console.log(data.results[i]);

			const markup = `<li>
        <img class="Logos" src = ${data.results[i].Logos[0].url}>
        <h2>${data.results[i]['Agency Name']}</h2> 
        <div class="Locations">${data.results[i].Locations}</div>
      </li>`;

			list.insertAdjacentHTML('beforeend', markup);
		}
	});


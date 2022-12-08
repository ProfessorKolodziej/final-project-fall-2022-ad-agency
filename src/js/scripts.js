const url = 'https://api.baserow.io/api/database/rows/table/115440/?user_field_names=true';

const list = document.querySelector('#list');
let storedData = null;

function buildHTML(data) {
	let markup = null;

	// eslint-disable-next-line
	for (let i = 0; i < data.length; i++) {
		// console.log(data[i]);
		markup += `<li>
			<img class="Logos" src = ${data[i].Logos[0].url}>
			<h2>${data[i]['Agency Name']}</h2>
			<div class="Locations">${data[i].Locations}</div>
			</li>`;
	}

	list.innerHTML = markup;
}

// This is good if you want to add a reset button.
// Add the button the same way as buildBoston is added.
function buildAll() {
	buildHTML(storedData);
}

// This gets the initial dataset and builds the results with it.
async function getData() {
	await fetch(url, { headers: { Authorization: 'Token woLMVJy43hZwBu44UBVYVabQyulxwTOw' } })
		.then((response) => response.json())
		.then((data) => {
			storedData = data.results;
			buildAll(storedData);
		});
}

// This builds the list using the Boston filter.
// It's another way of writing a function - same as line 24.
// You can use either style, whichever you like best.
// This is more modern, but it can be confusing when you're learning.
const buildBoston = () => {
	const filtered = storedData.filter((item) => item.Locations.includes('Boston'));
	// console.log(filtered);
	buildHTML(filtered);
};

const buildBostonButton = document.querySelector('#buildBoston');
if (buildBostonButton !== null) {
	buildBostonButton.addEventListener('click', buildBoston);
}

// Build the initial list when the page loads.
getData();

async function fetchPost(limit = 10) {
	try {
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
		);
		const json = await response.json();
		console.log(json);
		updateFetch(json);
	} catch (error) {
		console.log("Error");
	}
}
function updateFetch(json) {
	// template.innerHTML = "";
	json.forEach((item) => {
		const template = document
			.getElementById("cardPost")
			.content.cloneNode(true);
		template.querySelector(".card-title").innerText = item.title;
		template.querySelector(".card-text").innerText = item.body;
		document.getElementById("card-container").appendChild(template);
	});
}
fetchPost();

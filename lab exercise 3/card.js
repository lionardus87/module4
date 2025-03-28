const artists = [
	{
		name: "Van Gogh",
		portfolio: [
			{
				title: "Portrait",
				url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image",
			},
			{
				title: "Sky",
				url: "https://mymodernmet.com/wp/wp-content/uploads/2020/11/White-house-night-van-goh-worldwide-2.jpg",
			},
		],
	},
	{
		name: "Leonardo da Vinci",
		portfolio: [
			{
				title: "Mona Lisa",
				url: "https://cdn.britannica.com/24/189624-050-F3C5BAA9/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg?w=400&h=300&c=crop",
			},
			{
				title: "The Last Supper",
				url: "https://www.singulart.com/blog/wp-content/uploads/2019/08/tour_img-312981-148.jpg",
			},
		],
	},
];
function addCard() {
	artists.forEach((artist) => {
		artist.portfolio.forEach((artwork) => {
			// clone the template
			const template = document
				.getElementById("card-template")
				.content.cloneNode(true);
			// populate the template

			template.querySelector(".card-name").innerText = artist.name;
			template.querySelector(".card-title").innerText = artwork.title;
			template.querySelector(".card-image").src = artwork.url;
			template.querySelector(".card-image").alt = artwork.title;

			// include the populated template into the page
			document.querySelector("#card-list").appendChild(template);
		});
	});
}

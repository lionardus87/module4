const artists = [
	{
		name: "Van Gogh",
		age: "30 March 1853 - 29 July 1890 (37 years old)",
		location: "Zundert, Netherlands",
		portfolio: [
			{
				title: "Portrait",
				url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image",
				desc: "This painting, created in Paris, shows Van Gogh with a palette and paintbrushes, reflecting his identity as a painter and featuring his signature use of complementary colors.",
			},
			{
				title: "Sky",
				url: "https://mymodernmet.com/wp/wp-content/uploads/2020/11/White-house-night-van-goh-worldwide-2.jpg",
				desc: "A symbol of graveyards, mourning, and death. The stars are symbols of dreaming, heaven, and death. The church, mysteriously dark in this painting, is a symbol of his religious upbringing, as the spire is Dutch and not French in design.",
			},
		],
	},
	{
		name: "Leonardo da Vinci",
		age: "15 April 1452 - 2 May 1519 (67 years old)",
		location: "Anchiano, France",
		portfolio: [
			{
				title: "Mona Lisa",
				url: "https://cdn.britannica.com/24/189624-050-F3C5BAA9/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg?w=400&h=300&c=crop",
				desc: "The Mona Lisa bears a strong resemblance to many Renaissance depictions of the Virgin Mary, who was at that time seen as an ideal for womanhood.",
			},
			{
				title: "The Last Supper",
				url: "https://www.singulart.com/blog/wp-content/uploads/2019/08/tour_img-312981-148.jpg",
				desc: "Depicts the shock and horror of the twelve disciples upon learning that one amongst them was going to betray Jesus Christ.",
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
			template.querySelector(".card-age").innerText = artist.age;
			template.querySelector(".card-loc").innerText = artist.location;
			template.querySelector(".card-title").innerText = artwork.title;
			template.querySelector(".card-image").src = artwork.url;
			template.querySelector(".card-image").alt = artwork.title;
			template.querySelector(".card-desc").innerText = artwork.desc;

			// include the populated template into the page
			document.querySelector("#card-list").appendChild(template);
		});
	});
}

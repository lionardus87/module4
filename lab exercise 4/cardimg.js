const cardContent = [
	{
		title: "Card 1",
		text: "Drone high-angle photo of the turquoise-colored mountain river flowing in the pine woodland with a view of the mountain peaks in the background in Innlandet County, Norway",
		image:
			"https://media.istockphoto.com/id/1458782106/photo/scenic-aerial-view-of-the-mountain-landscape-with-a-forest-and-the-crystal-blue-river-in.jpg?s=612x612&w=0&k=20&c=NXQ_OK6JtmyRRBef8Wd67UZ3scQJKySkXl1ORaActH4=",
	},
	{
		title: "Card 2",
		text: "The world-famous Spirit Island and Maligne Lake at dusk. Jasper National Park, Alberta, Canada.",
		image:
			"https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg?s=612x612&w=0&k=20&c=FSGliJ4EKFP70Yjpzso0HfRR4WwflC6GKfl4F3Hj7fk=",
	},
	{
		title: "Card 3",
		text: "View of the Seiser Alm (Alpe di Siusi in Italian), one of the biggest alpine meadows on the Dolomites, with the Sassolungo and Sassopiatto peaks on the background.",
		image:
			"https://media.istockphoto.com/id/1253992491/photo/view-of-the-seiser-alm-one-of-the-biggest-alpine-meadows-on-the-dolomites-with-the-sassolungo.jpg?s=612x612&w=0&k=20&c=DQx3_12IcHvVQhkMOXphVIp5bNM--pqPS72V1eojw1w=",
	},
	{
		title: "Card 4",
		text: "Aerial view of a lake and forest in the morning with mist over the forest in the distant horizon",
		image:
			"https://media.istockphoto.com/id/1337232523/photo/high-angle-view-of-a-lake-and-forest.jpg?s=612x612&w=0&k=20&c=72ZZZG5jNaEE0QRq6o4pUk3CI0gG-Lw5AeWQUVgO7zQ=",
	},
	{
		title: "Card 5",
		text: "Silent Forest in spring with beautiful bright sun rays - wanderlust",
		image:
			"https://media.istockphoto.com/id/1419410282/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays.jpg?s=612x612&w=0&k=20&c=UHeb1pGOw6ozr6utsenXHhV19vW6oiPIxDqhKCS2Llk=",
	},
	{
		title: "Card 6",
		text: "View of pristine blue-green water in shifting red deposition of sediment gradually moving through alluvial plains of locations surrounding Francois Peron National Park in Western Australia.",
		image:
			"https://media.istockphoto.com/id/1330841884/photo/abstract-aerial-photography-useless-loop-western-australia.jpg?s=612x612&w=0&k=20&c=mw7iRLl-3TmQoRPzywbEz_zy9IRBC9augy7_mv7l4SM=",
	},
	{
		title: "Card 7",
		text: "Reflections on a Lake",
		image:
			"https://media.istockphoto.com/id/474267374/photo/reflections-on-a-lake.jpg?s=612x612&w=0&k=20&c=cqzsN4ldAbOywiM3Bf2lDf0wAsSUgzUHs_1Q-0ncIl8=",
	},
	{
		title: "Card 8",
		text: "Mist rises over the forest in Banff National Park Alberta Canada",
		image:
			"https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg?s=612x612&w=0&k=20&c=FSGliJ4EKFP70Yjpzso0HfRR4WwflC6GKfl4F3Hj7fk=",
	},
	{
		title: "Card 9",
		text: "Aerial view of pinetree forest at sunset on the background of mountains in Dolomites in summer",
		image:
			"https://media.istockphoto.com/id/1696167872/photo/aerial-view-of-forest-at-sunset-on-the-background-of-mountains-in-dolomites.jpg?s=612x612&w=0&k=20&c=TOMStt8moZZeljF3phyCioQXwYFrZBhY5-dsx-nMjDg=",
	},
	{
		title: "Card 10",
		text: "Beautiful nature at morning in the misty spring forest with sun rays",
		image:
			"https://media.istockphoto.com/id/506856658/photo/beautiful-nature-at-morning-in-misty-spring-forest-with-sun.jpg?s=612x612&w=0&k=20&c=5OyK3doU0H4OGHueN1Coa2r9deiWyly_sJRSddgRnRU=",
	},
];

function populateImg() {
	cardContent.forEach((card) => {
		const template = document
			.getElementById("card-template")
			.content.cloneNode(true);
		template.querySelector(".card-title").innerText = card.title;
		template.querySelector(".card-text").innerText = card.text;
		template.querySelector(".card-img-top").src = card.image;
		template.querySelector(".card-img-top").alt = card.text;
		document.getElementById("card-container").appendChild(template);
	});
}

// window.onload = populate;

let news = [
	{ id: 1, title: "Election Results", content: "Newly elected minister..." },
	{ id: 2, title: "Sporting Success", content: "World Cup winners..." },
	{ id: 3, title: "Tornado Warning", content: "Residents should prepare..." },
];

function updateNews() {
	const template = document.getElementById("newsContainer");
	// template.innerHTML = "";
	news.forEach((item) => {
		const article = document.createElement("div");
		article.classList.add("news-item");
		article.innerHTML = `<h2>${item.title}</h2><p>${item.content}</p>`;
		template.appendChild(article);
	});
}
function startNews() {
	intervalId = setInterval(updateNews, 5000);
}

function stopNews() {
	clearInterval(intervalId);
}

startNews();

document.getElementById("stopButton").addEventListener("click", stopNews);

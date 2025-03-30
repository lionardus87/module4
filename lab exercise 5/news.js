let news = [
	{ id: 1, title: "Election Results", content: "Newly elected minister..." },
	{ id: 2, title: "Sporting Success", content: "World Cup winners..." },
	{ id: 3, title: "Tornado Warning", content: "Residents should prepare..." },
];

let intervalId;

function updateNews() {
	// template.innerHTML = "";
	news.forEach((item) => {
		const template = document
			.getElementById("newsContainer")
			.content.cloneNode(true);
		template.querySelector(".card-title").innerText = item.title;
		template.querySelector(".card-text").innerText = item.content;
		document.getElementById("news-container").appendChild(template);
	});
}

function startNews() {
	if (!intervalId) {
		updateNews();
		intervalId = setInterval(updateNews, 5000);
	}
}

function stopNews() {
	clearInterval(intervalId);
	intervalId = null;
}
function restartNews() {
	stopNews();
	document.getElementById("news-container").innerHTML = "";
	startNews();
}
function addNews() {
	const title = document.getElementById("newsTitle").value;
	const content = document.getElementById("newsContent").value;
	if (title && content) {
		news.push({ id: news.length + 1, title, content });
		updateNews();
		document.getElementById("newsTitle").value = "";
		document.getElementById("newsContent").value = "";
	}
}

document.getElementById("stopButton").addEventListener("click", stopNews);
document.getElementById("startButton").addEventListener("click", startNews);
document.getElementById("restartButton").addEventListener("click", restartNews);
document.getElementById("addNewsButton").addEventListener("click", addNews);

startNews();

let newProducts = [];

async function fetchProduct() {
	try {
		const response = await fetch("https://fakestoreapi.com/products");
		const json = await response.json();
		newProducts = json;
		console.log(json);
		console.log(newProducts);
		filterCategory();
		displayProduct(newProducts);
	} catch (error) {
		console.log("Error fetching products", error);
	}
}
function displayProduct(products) {
	document.getElementById("product-container").innerHTML = "";
	products.forEach((product) => {
		const template = document
			.getElementById("productCard")
			.content.cloneNode(true);
		template.querySelector(".card-title").innerText = product.title;
		template.querySelector(".card-price").innerText = `$${product.price}`;
		template.querySelector(".card-img-top").src = product.image;
		template.querySelector(".card-img-top").alt = product.title;
		template.querySelector(
			".card-category"
		).innerText = `Category: ${product.category}`;
		template.querySelector(".card-desc").innerText = product.description;
		document.getElementById("product-container").appendChild(template);
	});
}
function filterCategory() {
	const categories = document.querySelectorAll(".dropdown-item");
	console.log(categories);
	categories.forEach((item) => {
		item.addEventListener("click", function () {
			const categoryValue = item.getAttribute("value");
			// console.log(categoryValue);
			if (categoryValue === "allCategories") {
				displayProduct(newProducts);
				console.log(categoryValue);
			} else {
				const filterProducts = newProducts.filter(
					(product) =>
						product.category.toLowerCase() === categoryValue.toLowerCase()
				);
				displayProduct(filterProducts);
				console.log(filterProducts);
			}
		});
	});
}
fetchProduct();

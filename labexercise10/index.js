let newProducts = [];
const categoryIcons = {};
categoryIcons["men's clothing"] = '<i class="fas fa-tshirt"></i>';
categoryIcons["women's clothing"] = '<i class="fas fa-female"></i>';
categoryIcons["electronics"] = '<i class="fas fa-tv"></i>';
categoryIcons["jewelery"] = '<i class="fas fa-gem"></i>';

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

		const categoryIcon =
			categoryIcons[product.category] || '<i class="fas fa-box"></i>';

		const iconContainer = template.querySelector(".card-category-icon");
		if (iconContainer) {
			iconContainer.innerHTML = categoryIcon;
		}

		document.getElementById("product-container").appendChild(template);
	});
}
function filterCategory() {
	const categories = document.querySelectorAll(".dropdown-item");

	categories.forEach((item) => {
		item.addEventListener("click", function () {
			const categoryValue = item.getAttribute("value");

			document.getElementById("searchInput").value = "";

			if (categoryValue === "allCategories") {
				displayProduct(newProducts);
			} else {
				const searchProducts = newProducts.filter(
					(product) =>
						product.category.toLowerCase() === categoryValue.toLowerCase()
				);
				displayProduct(searchProducts);
			}
		});
	});
}

function searchProducts() {
	const searchQuery = document
		.getElementById("searchInput")
		.value.toLowerCase();
	if (searchQuery === "") {
		displayProduct(newProducts);
		return;
	}
	const filteredProducts = newProducts.filter((product) => {
		const titleMatch = product.title.toLowerCase().includes(searchQuery);
		const categoryMatch = product.category.toLowerCase().includes(searchQuery);
		const descMatch = product.description.toLowerCase().includes(searchQuery);
		return titleMatch || categoryMatch || descMatch;
	});
	displayProduct(filteredProducts);
}

function sortProduct() {
	const sortOption = document.getElementById("sortOptions").value;
	let sortedProducts = [...newProducts];

	if (sortOption === "price-low-high") {
		sortedProducts.sort((a, b) => a.price - b.price);
	} else if (sortOption === "price-high-low") {
		sortedProducts.sort((a, b) => b.price - a.price);
	} else if (sortOption === "title-asc") {
		sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
	} else if (sortOption === "title-desc") {
		sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
	}

	displayProduct(sortedProducts);
}

fetchProduct();

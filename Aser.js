const products = [
  {
    id: 1,
    imageUrl: "https://images.acer.com/is/image/acer/browse-popular-categories-laptops?$Product-Catagories-XL$",
    title: "Ноудбуки",
  },
  {
    id: 2,
    imageUrl: "https://images.acer.com/is/image/acer/browse-popular-categories-desktops?$Product-Catagories-XL$",
    title: "Настольные ПК",
  },
  {
    id: 3,
    imageUrl: "https://images.acer.com/is/image/acer/browse-popular-categories-monitors?$Product-Catagories-XL$",
    title: "Мониторы",
  },
  {
    id: 4,
    imageUrl: "https://images.acer.com/is/image/acer/browse-popular-categories-projectors?$Product-Catagories-XL$",
    title: "Проекторы",
  },
  {
    id: 5,
    imageUrl: "https://images.acer.com/is/image/acer/browse-popular-categories-accessories?$Product-Catagories-XL$",
    title: "Аксесуары",
  },
];

function createProductCard(product) {
  const card = document.createElement("div");
  card.classList.add("card");

  const image = document.createElement("img");
  image.src = product.imageUrl;
  card.appendChild(image);

  const title = document.createElement("h2");
  title.textContent = product.title;
  card.appendChild(title);

  return card;
}

function displayProducts() {
  const container = document.getElementById("product-container");
  products.forEach(product => {
    const card = createProductCard(product);
    container.appendChild(card);
  });
}
displayProducts();


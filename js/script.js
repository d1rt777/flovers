const btnBuy = document.querySelectorAll('.btn-buy')

const cardsData = [
  {
    image: "img/розы.webp",
    title: 'Букет из красных роз "Эхплоэр"',
    description:
      "Яркий букет для любителей классической красной розы. Сорт роз имеет крупный бутон, бокалообразное",
    price: "8990 р + доставка 999 р",
  },
  {
    image: "img/тюльпаны.webp",
    title: 'Букет тюльпанов "Весенняя радость"',
    description: "Нежный букет из свежих тюльпанов разных оттенков",
    price: "4990 р + доставка 999 р",
  },
  {
    image: "img/пионы.webp",
    title: 'Букет пионов "Роскошь"',
    description: "Роскошный букет из пышных пионов премиум-класса",
    price: "12990 р + доставка 999 р",
  },
  {
    image: "img/розы.webp",
    title: 'Букет из красных роз "Эхплоэр"',
    description:
      "Яркий букет для любителей классической красной розы. Сорт роз имеет крупный бутон, бокалообразное",
    price: "8990 р + доставка 999 р",
  },
  {
    image: "img/тюльпаны.webp",
    title: 'Букет тюльпанов "Весенняя радость"',
    description: "Нежный букет из свежих тюльпанов разных оттенков",
    price: "4990 р + доставка 999 р",
  },
  {
    image: "img/пионы.webp",
    title: 'Букет пионов "Роскошь"',
    description: "Роскошный букет из пышных пионов премиум-класса",
    price: "12990 р + доставка 999 р",
  },
];


function createCard(data) {
  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.src = data.image;
  img.alt = "Цветы";

  const cardItem = document.createElement("div");
  cardItem.classList.add("card-item");

  const title = document.createElement("p");
  title.classList.add("title");
  title.textContent = data.title;

  const description = document.createElement("p");
  description.classList.add("description");
  description.textContent = data.description;

  const price = document.createElement("p");
  price.classList.add("price");
  price.textContent = data.price;

  const btns = document.createElement("div");
  btns.classList.add("btns");

  const btnInfo = document.createElement("button");
  btnInfo.classList.add("btn-info");
  btnInfo.textContent = "Подробнее";

  const btnBuy = document.createElement("button");
  btnBuy.classList.add("btn-buy");
  btnBuy.textContent = "В корзину";

  cardItem.append(title, description, price);
  btns.append(btnInfo, btnBuy);
  card.append(img, cardItem, btns);

  return card;
}

function renderCards() {
  const cardsContainer = document.querySelector(".cards");
  cardsData.forEach((data) => {
    const card = createCard(data);
    cardsContainer.append(card);
  });
}


document.addEventListener("DOMContentLoaded", () => {
  renderCards();
});

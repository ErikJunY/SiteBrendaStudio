document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("cards.json");
    const cards = await response.json();
    const main = document.querySelector("#cards-container");

    cards.forEach(card => {
      const div = document.createElement("div");
      div.classList.add("card");
      div.style.backgroundImage = `url(${card.image})`;
      div.innerHTML = "";
      div.addEventListener("click", () => window.open(card.link, "_blank"));
      main.appendChild(div);
    });
  } catch (err) {
    console.error("Erro ao carregar os cards:", err);
  }
});

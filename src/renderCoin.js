import Swal from "sweetalert2";

export const renderCoin = (coin) => {
  const { change, iconUrl, name, price, symbol } = coin;

  const ul = document.querySelector(".coins");

  const existingCoin = Array.from(ul.querySelectorAll(".coin-name span")).find(
    (span) => span.textContent.trim().toLowerCase() === name.toLowerCase()
  );

  if (existingCoin) {
    Swal.fire({
      icon: "warning",
      title: `${name} already exists 😊`,
    });
    return;
  }

  const li = document.createElement("li");
  li.classList.add("coin");
  li.innerHTML = `
    <div class="remove-icon">
        <i class="fas fa-window-close"></i>
    </div>
    <h2 class="coin-name">
        <span>${name}</span>
        <sup>${symbol}</sup>
    </h2>
    <div class="coin-temp">$${Number(price).toFixed(3)}</div>
    <figure>
        <img src="${iconUrl}" alt="" />
        <figcaption style='color:${change < 0 ? "red" : "green"}'>
            <i class="fa-solid fa-chart-line"></i>
            <span>${change || "0"}% </span>
        </figcaption>
    </figure>
  `;

  ul.append(li);

  li.querySelector(".remove-icon").addEventListener("click", () => {
    li.remove();
  });
};

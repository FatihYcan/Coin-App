export const errorCoin = () => {
  const main = document.querySelector("main");

  main.innerHTML = `
        <div style="display: flex; justify-content: center; align-items: center;">
            <img src="../img/404.png" alt="Error 404" style=" max-width: 100%; height: auto; border-radius: 8px;" />
        </div>
    `;
};

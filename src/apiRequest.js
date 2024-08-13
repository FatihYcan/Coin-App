import { renderCoin } from "./renderCoin";
import { errorCoin } from "./errorCoin";
import Swal from "sweetalert2";

export const apiRequest = async (input) => {
  const options = {
    headers: { "x-access-token": import.meta.env.VITE_API_KEY },
  };

  const url = `https://api.coinranking.com/v2/coins?search=${input}`;
  try {
    const res = await fetch(url, options);
    const data = await res.json();
    if (data.data.coins.length === 0) {
      Swal.fire({
        icon: "warning",
        title: "coin not found",
      });
    } else {
      renderCoin(data.data.coins[0]);
    }
  } catch (error) {
    errorCoin();
  }
};

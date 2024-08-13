import "./scss/style.scss";
import { apiRequest } from "./src/apiRequest";
import Swal from "sweetalert2";

const form = document.querySelector("header form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getCoin();
  e.target.reset();
});

const getCoin = () => {
  const input = document.querySelector("header form input").value;
  if (!input.trim()) {
    Swal.fire({
      icon: "error",
      title: "Input cannot be blank",
    });
  } else {
    apiRequest(input);
  }
};

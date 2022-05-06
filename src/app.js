/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let iconos = ["♦", "♥", "♠", "♣"];
  let numerocarta = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "K",
    "Q",
    "A"
  ];

  let numeroAleatorio = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  };

  let iconoCarta = document.querySelectorAll(".pinta");
  let posicionPinta = numeroAleatorio(0, 4);
  let pinta = iconos[posicionPinta];

  for (let i = 0; i < iconoCarta.length; i++) {
    iconoCarta[i].textContent = pinta;
    iconoCarta[i].style.color = posicionPinta < 2 ? "red" : "black"; //esto se le aplica a los h1
  }

  document.getElementById("numero").textContent =
    numerocarta[numeroAleatorio(0, 13)];
};

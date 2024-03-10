import { KUTYAK } from "./adatok.js";
const KUTYA_TABLAZAT_ELEM = document.querySelector("#tablazat");
const URLAP_ELEM = document.querySelector("#urlap");

// Táblázat létrehozása
function kutyaTablazat(TOMB) {
  KUTYA_TABLAZAT_ELEM.innerHTML = `
  <h2>Kutya adatok</h2>
  <table>
    <tr>
    <th id="faj">Fajta</th>
    <th id="meret">Méret (kg)</th>
    <th id="szorzet">Szőrzet</th>
    </tr>
    </table>`;
  const TABLAZAT = document.querySelector("#tablazat table");
  for (let index = 0; index < TOMB.length; index++) {
    TABLAZAT.innerHTML += `<tr>
    <td>${TOMB[index].faj}</td>
    <td>${TOMB[index].meret}</td>
    <td>${TOMB[index].szorzet}</td>
    </tr>`;
  }
}
kutyaTablazat(KUTYAK);

// adat bekérés
// https://www.youtube.com/watch?v=7LGpIQ6ceJs
const FORM_ELEM = document.querySelector("form");

FORM_ELEM.addEventListener("submit", function (e) {
  e.preventDefault();
  const TABLAZAT = document.querySelector("#tablazat table");
  const FORM_DATA = new FormData(FORM_ELEM);
  const OBJ = Object.fromEntries(FORM_DATA);
  let uresElem = false;
  for (const item of FORM_DATA) {
    if (item[1] === "") {
      uresElem = true;
      alert("Hiányos adat!");
    }
  }
  if (!uresElem) {
    KUTYAK.push(OBJ);
    TABLAZAT.innerHTML += `<tr>
          <td>${KUTYAK[KUTYAK.length - 1].faj}</td>
          <td>${KUTYAK[KUTYAK.length - 1].meret}</td>
          <td>${KUTYAK[KUTYAK.length - 1].szorzet}</td>
          </tr>`;
  }
});

// rendezés

const MERET_ELEM = document.querySelector("#meret");
const SZORZET_ELEM = document.querySelector("#szorzet");
const FAJ_ELEM = document.querySelector("#faj");
let fRendezettE = false;
FAJ_ELEM.addEventListener("click", function () {
  const TOMB = [];
  for (let index = 0; index < KUTYAK.length; index++) {
    TOMB.push({
      faj: KUTYAK[index].faj,
      meret: KUTYAK[index].meret,
      szorzet: KUTYAK[index].szorzet,
    });
  }
  if (!fRendezettE) {
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    TOMB.sort((a, b) => {
      const nameA = a.faj.toUpperCase();
      const nameB = b.faj.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    fRendezettE = true;
    kutyaTablazat(TOMB);
  } else if (fRendezettE) {
    fRendezettE = false;
    TOMB.reverse();
    kutyaTablazat(TOMB);
  }
});

MERET_ELEM.addEventListener("click", function () {
  console.log("asd");
  const TOMB = [];
  for (let index = 0; index < KUTYAK.length; index++) {
    TOMB.push({
      faj: KUTYAK[index].faj,
      meret: KUTYAK[index].meret,
      szorzet: KUTYAK[index].szorzet,
    });
  }
});

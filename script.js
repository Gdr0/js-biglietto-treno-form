const prezzo = document.querySelector(".calcola");
console.log(prezzo);

prezzo.addEventListener(
  "click",

  function () {
    // rimuovo d-block
    document.getElementById("biglietto").style.display = "block";

    // document.getElementById("biglietto").style.display = "none";

    // acquisisco valori (nome,distanza,eta)
    const name = document.querySelector(".costumerName");
    let costumerName = name.value;
    document.querySelector(".nome").innerHTML = costumerName;
    const km = document.querySelector(".km");
    let distanza = km.value;
    const age = document.querySelector(".age");
    let eta = age.value;
    console.log(eta, distanza, costumerName);
    // genero carrozza
    document.querySelector(".carrozza").innerHTML =
      Math.floor(Math.random() * 15) + 1;
    // DEFINISCO PREZZO DEL BIGLIETTO
    let fullPrice = distanza * 0.21;
    // console.log(fullPrice);
    // APPLICO SCONTO E CALCOLO PREZZO FINALE
    let mess = "il prezzo del tuo biglietto è di";
    if (eta > 65) {
      let discount = fullPrice * (45 / 100);
      let discountPrice = (fullPrice - discount).toFixed(2);
      console.log(discountPrice);
      document.querySelector(".offerta").innerHTML = "Sconto over 65";
      document.querySelector(
        ".prezzo-biglietto"
      ).innerHTML = `${discountPrice}€`;
    } else if (eta < 18) {
      let discount = fullPrice * (20 / 100);
      let discountPrice = (fullPrice - discount).toFixed(2);
      document.querySelector(".offerta").innerHTML = "Sconto minorenni";
      console.log(discountPrice);
      document.querySelector(
        ".prezzo-biglietto"
      ).innerHTML = `${discountPrice}€`;
    } else {
      document.querySelector(".offerta").innerHTML = "Biglietto standard";
      console.log(fullPrice.toFixed(2));
      document.querySelector(
        ".prezzo-biglietto"
      ).innerHTML = `${fullPrice.toFixed(2)}€`;
    }
  }
);

// COMANDO PER ANNULLARE BIGLIETTO
const annulla = document.querySelector(".clear");
console.log(annulla);
annulla.addEventListener(
  "click",

  function () {
    document.getElementById("biglietto").style.display = "none";
  }
);

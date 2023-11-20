const prezzo = document.querySelector(".calcola");
console.log(prezzo);

prezzo.addEventListener(
  "click",

  function () {
    const name = document.querySelector(".costumerName");
    let costumerName = name.value;
    const km = document.querySelector(".km");
    let distanza = km.value;
    const age = document.querySelector(".age");
    let eta = age.value;
    console.log(eta, distanza, costumerName);
    // DEFINISCO PREZZO DEL BIGLIETTO
    let fullPrice = distanza * 0.21;
    // console.log(fullPrice);
    // APPLICO SCONTO E CALCOLO PREZZO FINALE
    let mess = "il prezzo del tuo biglietto è di";
    if (eta > 65) {
      let discount = fullPrice * (45 / 100);
      let discountPrice = (fullPrice - discount).toFixed(2);
      console.log(discountPrice);
      document.querySelector(
        ".train_ticket"
      ).innerHTML = `${mess} ${discountPrice}€`;
    } else if (eta < 18) {
      let discount = fullPrice * (20 / 100);
      let discountPrice = (fullPrice - discount).toFixed(2);
      console.log(discountPrice);
      document.querySelector(
        ".train_ticket"
      ).innerHTML = `${mess} ${discountPrice}€`;
    } else {
      console.log(fullPrice.toFixed(2));
      document.querySelector(
        ".train_ticket"
      ).innerHTML = `${mess} ${fullPrice.toFixed(2)}€`;
    }
  }
);

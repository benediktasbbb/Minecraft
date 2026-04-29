let Kintamasis = document.getElementById("submit");

Kintamasis.onclick = function () {
    Kintamasis.style.backgroundColor = "darkred";
    Kintamasis.innerText = "😡 KĄ DARAI?! 😡";
    Kintamasis.style.transform = "scale(5)";
    Kintamasis.style.transition = "transform 2s, background-color 0s";

    setTimeout(() => {
        Kintamasis.style.transform = "scale(1)";
        Kintamasis.style.backgroundColor = "";
        Kintamasis.innerText = "☻ Labas ☺";
        Kintamasis.style.transition = "transform 2s, background-color 4s";
    }, 4000);
};
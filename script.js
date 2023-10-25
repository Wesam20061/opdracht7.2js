let budget = parseFloat(prompt("Hoeveel geld heb je?"));
let productPrijs = parseFloat(prompt("Hoeveel kost het product dat je wilt kopen?"));
let saldo = document.getElementById("Resultaat");

if (!isNaN(budget) && !isNaN(productPrijs)) {
    if (budget >= productPrijs) {
        let over = budget - productPrijs;
        saldo.innerHTML = "Je hebt genoeg geld! " + over + " euro is er over van : " + budget + " euro";
        saldo.style.color = "green";
    } else {
        saldo.innerHTML = "Helaas, je hebt te weinig geld!";
        saldo.style.color = "red";
    }
} else {
    saldo.innerHTML = "Ongeldige invoer. Voer geldige bedragen in.";
    saldo.style.color = "red";
}
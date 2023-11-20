const santoUrl = "https://www.santodelgiorno.it/santi.json";

fetch(santoUrl)
    .then(response => response.json())
    .then(data => {
        document.querySelector(".santo .nome").innerHTML = data[0].nome;
        document.querySelector(".santo .ruolo").innerHTML = data[0].tipologia;
    })
    .catch(error => {
        console.error("Si è verificato un errore durante il recupero dei dati:", error);
    });
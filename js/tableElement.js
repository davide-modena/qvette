const pTableJson = "https://raw.githubusercontent.com/neelpatel05/periodic-table-api/master/data.json";
var randomElement = Math.floor(Math.random() * 118) + 1;

fetch(pTableJson)
    .then(response => response.json())
    .then(data => {
        document.querySelector(".table-element .number").innerHTML = data[randomElement].atomicNumber;
        document.querySelector(".table-element .symbol").innerHTML = data[randomElement].symbol;
        document.querySelector(".table-element .name").innerHTML = data[randomElement].name;
        document.querySelector(".table-element .mass").innerHTML = data[randomElement].atomicMass;
        document.querySelector(".table-element").style.backgroundColor = "#"+data[randomElement].cpkHexColor;
    })
    .catch(error => {
        console.error("Si è verificato un errore durante il recupero dei dati:", error);
    });

// VERIFICA COLLEGAMENTO JAVA
console.log("JS")


// Reupero ul dal dom "listaspesa"

const listaspesa = document.getElementById('listastampa')
console.log(listaspesa)

// Creo Array 
const shop = ["Uova", "Pane", "Latte", "Biscotti", "Pasta", "Affettati", "Formaggio", "Verdura", "Frutta",];
console.log(shop)

let lista = ''

// mi creo il mio ciclo for per controllare tutta la mia listaitem
// for (let i = 0; i < shop.length; i++) {
//     lista += `<li>${shop[i]}</li>`;
//     console.log(shop[i])

// }

// console.log(lista)
// stampo nel Dom la lista della spesa

// listaspesa.innerHTML = lista;

// ***********TRANSFORMO TUTTO CON IL WHILE//

let i = 0

while (i < shop.length) {
    lista += `<li>${shop[i]}</li>`
    i++

}

// stampo nel Dom la lista della spesa

listaspesa.innerHTML = lista;

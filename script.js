let saldo = 0.00

let tituloInput = document.getElementById('titulo'); 
let valorInput = document.getElementById('valor');   
let dataInput = document.getElementById('data');     
let rotuloInput = document.querySelector('input[list="rotulo"]'); 
let classeInput = document.querySelector('input[list="classe"]'); 

let saldoDisplay = document.getElementById('saldo'); 

function atualizarSaldoDisplay() {
    saldoDisplay.textContent = `Saldo: R$ ${saldo.toFixed(2).replace('.', ',')}`;
}

atualizarSaldoDisplay(); 

function adicionar(){
    

    let titulo = tituloInput.value;
    let valor = parseFloat(valorInput.value);
    let data = dataInput.value;
    let rotulo = rotuloInput.value;
    let classe = classeInput.value;

    let lista = document.getElementById('lista');
    let elemento = document.createElement('li');

    lista.appendChild(elemento);

    elemento.textContent = `${titulo} (R$ ${valor}) - ${data} | Rótulo: ${rotulo} | Tipo: ${classe}`;

    if (classe === 'Ganho'){
        saldo = saldo + valor
    }
    else if (classe === 'Gasto'){
        saldo = saldo - valor
    }
    else{
        alert('Insira uma classe válida!')
    }
     atualizarSaldoDisplay(); 

    if (saldo < 0){
        saldoDisplay.style.color = 'red'
    } 

    tituloInput.value = "";
    valorInput.value = "";
    dataInput.value = "";
    rotuloInput.value = "";
    classeInput.value = "";

}
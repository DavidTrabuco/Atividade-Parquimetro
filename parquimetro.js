
class Parquimetro {
    constructor(tempo, valor) {
        
        this.tempoInicio = parseFloat(tempo) || 0;
        this.valorInserido = parseFloat(valor) || 0;
        this.troco = 0;
    }

    valorPagar() {
        if (this.tempoInicio <= 30) {
            return 1.00;
        } else if (this.tempoInicio <= 60) {
            return 1.75;
        } else if (this.tempoInicio <= 120) {
            return 2.50;
        } else {
            return 0; 
        }
    }

    calcularTroco() {
        const valorDevido = this.valorPagar();
        this.troco = this.valorInserido - valorDevido;
        return this.troco;
    }
}

function calculadora() {
    const tempo = document.getElementById("tempo").value;
    const valor = document.getElementById("valor").value;
    const trocoTELA = document.getElementById("troco");

    if (!tempo || !valor) {
        trocoTELA.textContent  = "Por favor, insira tempo e valor.";
        return;
    }
    const estacionamento = new Parquimetro(tempo, valor);
    const troco = estacionamento.calcularTroco();
    if (troco < 0) {
        trocoTELA.textContent  = `Valor insuficiente. Faltam R$${Math.abs(troco).toFixed(2).replace('.', ',')}`;
    } else {
        trocoTELA.textContent = `Troco: R$${troco.toFixed(2).replace('.', ',')}`;
        document.getElementById("tempo").value = "";
        document.getElementById("valor").value = "";
    }
    
}

console.log("TESTE!!");
function calcularResultado() {
    const valor1 = parseFloat(document.getElementById('valor1').value);
    const operacao = document.getElementById('operacao').value;
    const valor2 = parseFloat(document.getElementById('valor2').value);

    let resultado;

    switch (operacao) {
        case '+':
            resultado = valor1 + valor2;
            break;
        case '-':
            resultado = valor1 - valor2;
            break;
        case '*':
            resultado = valor1 * valor2;
            break;
        case '/':
            if (valor2 === 0) {
                alert('Erro: Divisão por zero!');
                return;
            }
            resultado = valor1 / valor2;
            break;
        default:
            alert('Operação inválida!');
            return;
    }

    document.getElementById('valorCalculado').textContent = `Resultado: ${resultado}`;
}

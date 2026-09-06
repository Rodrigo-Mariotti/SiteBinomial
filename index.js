function factorial(value) {
    if (value < 0) return NaN;
    let result = 1;

    for (let i = 2; i <= value; i++) {
        result *= i;
    }

    return result;
}

function binomialCoefficient(n, x) {
    if (!Number.isInteger(n) || !Number.isInteger(x)) {
        return NaN;
    }

    if (x < 0 || x > n) {
        return 0;
    }

    return factorial(n) / (factorial(x) * factorial(n - x));
}

function calculate() {
    const n = Number(document.getElementById("n").value);
    const x = Number(document.getElementById("r").value);
    const p = Number(document.getElementById("p").value);
    const resultField = document.getElementById("result1");

    if (!Number.isFinite(n) || !Number.isFinite(x) || !Number.isFinite(p)) {
        resultField.value = "Entrada inválida";
        return;
    }

    if (!Number.isInteger(n) || !Number.isInteger(x) || n < 0 || x < 0 || x > n) {
        resultField.value = "n e x devem ser inteiros e x <= n";
        return;
    }

    if (p < 0 || p > 1) {
        resultField.value = "P deve estar entre 0 e 1";
        return;
    }

    const probability = binomialCoefficient(n, x) * Math.pow(p, x) * Math.pow(1 - p, n - x);
    resultField.value = probability.toFixed(10);
}

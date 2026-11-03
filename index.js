function binomialProbability(n, x, p) {
    if (p === 0) return x === 0 ? 1 : 0;
    if (p === 1) return x === n ? 1 : 0;

    let probability = Math.pow(1 - p, n);

    for (let successes = 0; successes < x; successes++) {
        probability *= ((n - successes) / (successes + 1)) * (p / (1 - p));
    }

    return probability;
}

function cumulativeBinomialProbability(n, x, p) {
    if (p === 0) return 1;
    if (p === 1) return x === n ? 1 : 0;

    let term = Math.pow(1 - p, n);
    let cumulative = term;

    for (let successes = 0; successes < x; successes++) {
        term *= ((n - successes) / (successes + 1)) * (p / (1 - p));
        cumulative += term;
    }

    return cumulative;
}

function calculate() {
    const n = Number(document.getElementById("n").value);
    const x = Number(document.getElementById("r").value);
    const p = Number(document.getElementById("p").value);
    const resultField = document.getElementById("result1");
    const cumulativeResultField = document.getElementById("result2");

    if (!Number.isFinite(n) || !Number.isFinite(x) || !Number.isFinite(p)) {
        resultField.value = "Entrada inválida";
        cumulativeResultField.value = "Entrada inválida";
        return;
    }

    if (!Number.isInteger(n) || !Number.isInteger(x) || n < 0 || x < 0 || x > n) {
        resultField.value = "n e x devem ser inteiros e x <= n";
        cumulativeResultField.value = "n e x devem ser inteiros e x <= n";
        return;
    }

    if (p < 0 || p > 1) {
        resultField.value = "P deve estar entre 0 e 1";
        cumulativeResultField.value = "P deve estar entre 0 e 1";
        return;
    }

    const probability = binomialProbability(n, x, p);
    const cumulativeProbability = cumulativeBinomialProbability(n, x, p);

    resultField.value = probability.toFixed(10);
    cumulativeResultField.value = cumulativeProbability.toFixed(10);
}

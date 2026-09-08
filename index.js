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

function binomialCumulative(n, x, p) {
  let total = 0;

  for (let i = 0; i <= x; i++) {
    total += binomialCoefficient(n, i) * Math.pow(p, i) * Math.pow(1 - p, n - i);
  }

  return total;
}

function calculate() {
  const n = Number(document.getElementById("n").value);
  const x = Number(document.getElementById("r").value);
  const p = Number(document.getElementById("p").value);

  const tipo = document.getElementById("tipo").value;

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

  let probability;

  if (tipo === "individual") {
    probability = binomialCoefficient(n, x) * Math.pow(p, x) * Math.pow(1 - p, n - x);
  } else {
    probability = binomialCumulative(n, x, p);
  }

  resultField.value = probability.toFixed(10);
}

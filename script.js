const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const capitalInicial = document.getElementById("captitalInicial").value;
  const taxaDeJuros = document.getElementById("taxaDeJuros").value;
  const numeroDeMeses = document.getElementById("numeroDeMeses").value;
  const nomeInvestidor = document.getElementById("nomeInvestidor").value;

  let juros = parseFloat(taxaDeJuros / 100);
  let meses = parseInt(numeroDeMeses);
  let capital = parseFloat(capitalInicial);

  let montante = capital * Math.pow(1 + juros, meses);
  alert(
    ` ola investidor ${nomeInvestidor} seu investimento de ${new Intl.NumberFormat(
      "pt-BR",
      { style: "currency", currency: "BRL" }
    ).format(capital)} com o rendimento de ${
      juros * 100
    }% por mês rendeu ${new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(montante.toFixed(2))}`
  );
});

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const capitalInicial = document.getElementById("captitalInicial").value;
  const taxaDeJuros = document.getElementById("taxaDeJuros").value;
  const numeroDeMeses = document.getElementById("numeroDeMeses").value;
  const nomeInvestidor = document.getElementById("nomeInvestidor").value;

  const juros = Number.parseFloat(taxaDeJuros / 100);
  const meses = Number.parseInt(numeroDeMeses);
  const capital = Number.parseFloat(capitalInicial);

  const montante = capital * (1 + juros) ** meses;
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

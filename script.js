const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const capitalInicial = document.getElementById("captitalInicial").value;
  const taxaDeJuros = document.getElementById("taxaDeJuros").value;
  const numeroDeMeses = document.getElementById("numeroDeMeses").value;
  const nomeInvestidor = document.getElementById("nomeInvestidor").value;

  const juros = capitalInicial * taxaDeJuros * numeroDeMeses;

  alert(`sua renda sera de ${juros}`);
});

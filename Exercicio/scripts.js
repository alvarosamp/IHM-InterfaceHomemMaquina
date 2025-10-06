const inputNota = document.getElementById("nota");
const labelNota = document.querySelector(".lable-nota");

inputNota.addEventListener("input", () => {
  const valor = parseFloat(inputNota.value);
  
  // Remove classes antigas
  labelNota.classList.remove("vermelho", "laranja", "verde");

  if (isNaN(valor)) {
    labelNota.textContent = "Nota não informada";
    return;
  }

  // Define cor e texto conforme a regra
  if (valor < 6) {
    labelNota.classList.add("vermelho");
    labelNota.textContent = `Nota ${valor} - Reprovado`;
  } else if (valor < 8) {
    labelNota.classList.add("laranja");
    labelNota.textContent = `Nota ${valor} - Regular`;
  } else {
    labelNota.classList.add("verde");
    labelNota.textContent = `Nota ${valor} - Aprovado`;
  }
});

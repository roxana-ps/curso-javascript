// pido el diámetro y calculo el área
const d = Number(prompt("Ingresa el diámetro (cm):"));
// Para calcular radio
const r = d / 2;
// Para calcular área
const area = Math.PI * Math.pow(r, 2);

// Formatear resultado
console.log("Area:", area.toFixed(2), "cm²");
alert(`Área: ${area.toFixed(2)} cm²`);
document.getElementById("resultado").textContent = `Area: ${area.toFixed(2)} cm²`;

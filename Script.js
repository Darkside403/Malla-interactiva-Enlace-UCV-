const materias = [
  { nombre: "Contabilidad I", semestre: 1, créditos: 5, código: "5111", prelación: [] },
  { nombre: "Contabilidad II", semestre: 2, créditos: 5, código: "5112", prelación: ["5111"] },
  { nombre: "Contabilidad III", semestre: 3, créditos: 5, código: "5113", prelación: ["5112"] },
  { nombre: "Contabilidad IV", semestre: 4, créditos: 5, código: "5114", prelación: ["5113"] },
  // Agrega más materias aquí siguiendo el mismo formato
];

let aprobadas = [];

function renderMaterias() {
  const malla = document.getElementById("malla");
  malla.innerHTML = "";

  let totalCreditos = 0;

  materias.forEach(materia => {
    const puedeVerse = materia.prelación.every(cod => aprobadas.includes(cod));
    const div = document.createElement("div");
    div.className = "materia";
    div.style.opacity = puedeVerse ? "1" : "0.4";

    const check = document.createElement("input");
    check.type = "checkbox";
    check.checked = aprobadas.includes(materia.codigo);
    check.onchange = () => {
      if (check.checked) {
        aprobadas.push(materia.codigo);
      } else {
        aprobadas = aprobadas.filter(c => c !== materia.codigo);
      }
      renderMaterias();
    };

    if (aprobadas.includes(materia.codigo)) {
      totalCreditos += materia.créditos;
    }

    div.appendChild(check);
    div.innerHTML += `<strong>${materia.nombre}</strong><br>
      Semestre: ${materia.semestre}<br>
      Créditos: ${materia.créditos}<br>
      Código: ${materia.codigo}<br>
      Prelación: ${materia.prelación.join(", ") || "Ninguna"}`;

    malla.appendChild(div);
  });

  document.getElementById("creditos").innerText = `Créditos aprobados: ${totalCreditos}`;
}
renderMaterias();

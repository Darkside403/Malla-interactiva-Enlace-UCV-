const materias = [
  // ... (todo tu array de materias completo aquí, sin cambios)
];

// 🔧 Renderizado dinámico de la malla
function crearElementoMateria(materia) {
  const div = document.createElement("div");
  div.className = "materia";
  div.innerHTML = `
    <strong>${materia.nombre}</strong><br>
    Código: ${materia.codigo}<br>
    Créditos: ${materia.créditos}<br>
    Semestre: ${materia.semestre}
  `;
  return div;
}

function renderizarMaterias() {
  const cicloBasico = document.getElementById("ciclo-basico");
  const administracion = document.getElementById("administracion");
  const contaduria = document.getElementById("contaduria");

  materias.forEach((materia) => {
    const elemento = crearElementoMateria(materia);
    if (materia.tipo === "ciclo") {
      cicloBasico.appendChild(elemento);
    } else if (materia.tipo === "admin") {
      administracion.appendChild(elemento);
    } else if (materia.tipo === "cont") {
      contaduria.appendChild(elemento);
    }
  });
}

document.addEventListener("DOMContentLoaded", renderizarMaterias);

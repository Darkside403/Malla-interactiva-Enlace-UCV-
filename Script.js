const materias = [
  { nombre: "Contabilidad I", semestre: 1, créditos: 5, código: "5111", prelación: [], tipo: "ciclo" },
  { nombre: "Administración II", semestre: 5, créditos: 4, código: "5225", prelación: ["5224"], tipo: "admin" },
  { nombre: "Auditoría I", semestre: 5, créditos: 4, código: "5305", prelación: ["5114"], tipo: "cont" },
  // Puedes seguir agregando todas las demás materias aquí...
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

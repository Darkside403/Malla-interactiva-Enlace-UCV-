const materias = [
  // Aquí va tu array completo de materias (ya lo tienes bien definido)
];

// 🔧 Agrupar materias por tipo y semestre
function agruparMateriasPorTipo() {
  const agrupadas = {
    ciclo: {},
    admin: {},
    cont: {}
  };

  materias.forEach((materia) => {
    const tipo = materia.tipo;
    const semestre = materia.semestre;

    if (!agrupadas[tipo][semestre]) {
      agrupadas[tipo][semestre] = [];
    }

    agrupadas[tipo][semestre].push(materia);
  });

  return agrupadas;
}

// 🔧 Crear HTML para cada materia
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

// 🔧 Renderizar materias en el DOM
function renderizarMaterias() {
  const agrupadas = agruparMateriasPorTipo();

  const cicloBasico = document.getElementById("ciclo-basico");
  const administracion = document.getElementById("administracion");
  const contaduria = document.getElementById("contaduria");

  function renderizarSeccion(contenedor, materiasPorSemestre) {
    Object.keys(materiasPorSemestre).sort((a, b) => a - b).forEach((semestre) => {
      const grupo = document.createElement("div");
      grupo.className = "semestre";
      grupo.innerHTML = `<h3>Semestre ${semestre}</h3>`;

      materiasPorSemestre[semestre].forEach((materia) => {
        const elemento = crearElementoMateria(materia);
        grupo.appendChild(elemento);
      });

      contenedor.appendChild(grupo);
    });
  }

  renderizarSeccion(cicloBasico, agrupadas.ciclo);
  renderizarSeccion(administracion, agrupadas.admin);
  renderizarSeccion(contaduria, agrupadas.cont);
}

document.addEventListener("DOMContentLoaded", renderizarMaterias);

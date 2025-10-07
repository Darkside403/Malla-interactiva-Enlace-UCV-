const materias = [
  // 🟦 CICLO BÁSICO
  { nombre: "Contabilidad I", código: "5111", créditos: 5, semestre: 1, tipo: "ciclo", prelación: [] },
  { nombre: "Técnicas de Investigación y Documentación", código: "5371", créditos: 2, semestre: 1, tipo: "ciclo", prelación: [] },
  { nombre: "Teoría Económica I", código: "5421", créditos: 4, semestre: 1, tipo: "ciclo", prelación: [] },
  { nombre: "Historia Económica General", código: "5441", créditos: 4, semestre: 1, tipo: "ciclo", prelación: [] },
  { nombre: "Matemática I", código: "5531", créditos: 3, semestre: 1, tipo: "ciclo", prelación: [] },

  { nombre: "Contabilidad II", código: "5112", créditos: 5, semestre: 2, tipo: "ciclo", prelación: ["5111"] },
  { nombre: "Metodología I", código: "5362", créditos: 2, semestre: 2, tipo: "ciclo", prelación: ["5371"] },
  { nombre: "Teoría Económica II", código: "5422", créditos: 4, semestre: 2, tipo: "ciclo", prelación: ["5421"] },
  { nombre: "Historia Económica de Venezuela", código: "5442", créditos: 4, semestre: 2, tipo: "ciclo", prelación: ["5441"] },
  { nombre: "Matemática II", código: "5532", créditos: 3, semestre: 2, tipo: "ciclo", prelación: ["5531"] },

  { nombre: "Contabilidad III", código: "5113", créditos: 5, semestre: 3, tipo: "ciclo", prelación: ["5112"] },
  { nombre: "Metodología II", código: "5363", créditos: 2, semestre: 3, tipo: "ciclo", prelación: ["5362"] },
  { nombre: "Geografía Económica General", código: "5423", créditos: 4, semestre: 3, tipo: "ciclo", prelación: ["5422"] },
  { nombre: "Matemática III", código: "5533", créditos: 3, semestre: 3, tipo: "ciclo", prelación: ["5532"] },
  { nombre: "Derecho Civil", código: "5653", créditos: 4, semestre: 3, tipo: "ciclo", prelación: [] },

  { nombre: "Contabilidad IV", código: "5114", créditos: 5, semestre: 4, tipo: "ciclo", prelación: ["5113"] },
  { nombre: "Administración I", código: "5224", créditos: 4, semestre: 4, tipo: "ciclo", prelación: [] },
  { nombre: "Geografía Económica de Venezuela", código: "5424", créditos: 4, semestre: 4, tipo: "ciclo", prelación: ["5423"] },
  { nombre: "Matemática IV", código: "5534", créditos: 3, semestre: 4, tipo: "ciclo", prelación: ["5532"] },
  { nombre: "Derecho Mercantil", código: "5654", créditos: 4, semestre: 4, tipo: "ciclo", prelación: ["5653"] },

  // 🟨 ADMINISTRACIÓN
  { nombre: "Administración II", código: "5225", créditos: 4, semestre: 5, tipo: "admin", prelación: ["5224"] },
  { nombre: "Desarrollo Económico I", código: "5425", créditos: 4, semestre: 5, tipo: "admin", prelación: ["5424"] },
  { nombre: "Estadística I", código: "5535", créditos: 4, semestre: 5, tipo: "admin", prelación: ["5533"] },
  { nombre: "Derecho del Trabajo", código: "5655", créditos: 4, semestre: 5, tipo: "admin", prelación: ["5653"] },
  { nombre: "Sociología", código: "5255", créditos: 4, semestre: 5, tipo: "admin", prelación: ["5423"] },

  { nombre: "Administración III", código: "5226", créditos: 4, semestre: 6, tipo: "admin", prelación: ["5225"] },
  { nombre: "Desarrollo Económico II", código: "5426", créditos: 4, semestre: 6, tipo: "admin", prelación: ["5425"] },
  { nombre: "Estadística II", código: "5536", créditos: 4, semestre: 6, tipo: "admin", prelación: ["5535"] },
  { nombre: "Fundamentos de Derecho Público", código: "5656", créditos: 4, semestre: 6, tipo: "admin", prelación: ["5653"] },
  { nombre: "Tecnología de la Información I", código: "5566", créditos: 2, semestre: 6, tipo: "admin", prelación: [] },

  { nombre: "Sistemas de Costos Industriales", código: "5217", créditos: 3, semestre: 7, tipo: "admin", prelación: ["5114", "5226"] },
  { nombre: "Administración de Personal", código: "5227", créditos: 4, semestre: 7, tipo: "admin", prelación: ["5226"] },
  { nombre: "Investigación de Operaciones", código: "5537", créditos: 4, semestre: 7, tipo: "admin", prelación: ["5533"] },
  { nombre: "Tecnología de la Información II", código: "5567", créditos: 4, semestre: 7, tipo: "admin", prelación: ["5566"] },
  { nombre: "Derecho Financiero", código: "5657", créditos: 4, semestre: 7, tipo: "admin", prelación: ["5656"] },

  { nombre: "Análisis de Estados Financieros I", código: "5118", créditos: 4, semestre: 8, tipo: "admin", prelación: ["5114", "5535"] },
  { nombre: "Sistemas y Procedimientos Administrativos", código: "5218", créditos: 3, semestre: 8, tipo: "admin", prelación: ["5226"] },
  { nombre: "Mercado y Publicidad I", código: "5238", créditos: 4, semestre: 8, tipo: "admin", prelación: ["5426", "5217"] },
  { nombre: "Seminario I", código: "5078", créditos: 2, semestre: 8, tipo: "admin", prelación: ["5363"] },

  { nombre: "Análisis de Estados Financieros II", código: "5119", créditos: 4, semestre: 9, tipo: "admin", prelación: ["5118"] },
  { nombre: "Presupuesto I", código: "5149", créditos: 4, semestre: 9, tipo: "admin", prelación: ["5217"] },
  { nombre: "Administración de la Producción", código: "5229", créditos: 4, semestre: 9, tipo: "admin", prelación: ["5217", "5537"] },
  { nombre: "Mercado y Publicidad II", código: "5239", créditos: 4, semestre: 9, tipo: "admin", prelación: ["5238"] },
  { nombre: "Seminario II", código: "5079", créditos: 2, semestre: 9, tipo: "admin", prelación: ["5363"] },
  { nombre: "Electiva I", código: "5209", créditos: 3, semestre: 9, tipo: "admin", prelación: [] },
  { nombre: "Pasantía", código: "5289", créditos: 3, semestre: 9, tipo: "admin", prelación: [] },

  { nombre: "Presupuesto II", código: "5160", créditos: 4, semestre: 10, tipo: "admin", prelación: ["5149"] },
  { nombre: "Administración Pública", código: "5220", créditos: 4, semestre: 10, tipo: "admin", prelación: ["5226", "5656"] },
  { nombre: "

   const materias = [
  { nombre: "Contabilidad I", código: "5111", créditos: 5, semestre: 1, tipo: "ciclo", prelación: [] },
  { nombre: "Administración II", código: "5225", créditos: 4, semestre: 5, tipo: "admin", prelación: ["5224"] },
  { nombre: "Auditoría I", código: "5128", créditos: 3, semestre: 8, tipo: "cont", prelación: ["5115"] }
];

function crearElementoMateria(materia) {
  const div = document.createElement("div");
  div.className = "materia";
  div.innerHTML = `
    <strong>${materia.nombre}</strong><br>
    Código: ${materia.código}<br>
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

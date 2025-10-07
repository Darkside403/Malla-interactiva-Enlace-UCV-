const materias = [
  // CICLO BÁSICO
  { nombre: "Contabilidad I", semestre: 1, créditos: 5, código: "5111", prelación: [], tipo: "ciclo" },
  { nombre: "Técnicas de Investigación y Documentación", semestre: 1, créditos: 2, código: "5371", prelación: [], tipo: "ciclo" },
  { nombre: "Teoría Económica I", semestre: 1, créditos: 4, código: "5421", prelación: [], tipo: "ciclo" },
  { nombre: "Historia Económica General", semestre: 1, créditos: 4, código: "5441", prelación: [], tipo: "ciclo" },
  { nombre: "Matemática I", semestre: 1, créditos: 3, código: "5531", prelación: [], tipo: "ciclo" },

  { nombre: "Contabilidad II", semestre: 2, créditos: 5, código: "5112", prelación: ["5111"], tipo: "ciclo" },
  { nombre: "Metodología I", semestre: 2, créditos: 2, código: "5362", prelación: ["5371"], tipo: "ciclo" },
  { nombre: "Teoría Económica II", semestre: 2, créditos: 4, código: "5422", prelación: ["5421"], tipo: "ciclo" },
  { nombre: "Historia Económica de Venezuela", semestre: 2, créditos: 4, código: "5442", prelación: ["5441"], tipo: "ciclo" },
  { nombre: "Matemática II", semestre: 2, créditos: 3, código: "5532", prelación: ["5531"], tipo: "ciclo" },

  { nombre: "Contabilidad III", semestre: 3, créditos: 5, código: "5113", prelación: ["5112"], tipo: "ciclo" },
  { nombre: "Metodología II", semestre: 3, créditos: 2, código: "5363", prelación: ["5362"], tipo: "ciclo" },
  { nombre: "Geografía Económica General", semestre: 3, créditos: 4, código: "5423", prelación: ["5422"], tipo: "ciclo" },
  { nombre: "Matemática III", semestre: 3, créditos: 3, código: "5533", prelación: ["5532"], tipo: "ciclo" },
  { nombre: "Derecho Civil", semestre: 3, créditos: 4, código: "5653", prelación: [], tipo: "ciclo" },

  { nombre: "Contabilidad IV", semestre: 4, créditos: 5, código: "5114", prelación: ["5113"], tipo: "ciclo" },
  { nombre: "Administración I", semestre: 4, créditos: 4, código: "5224", prelación: [], tipo: "ciclo" },
  { nombre: "Geografía Económica de Venezuela", semestre: 4, créditos: 4, código: "5424", prelación: ["5423"], tipo: "ciclo" },
  { nombre: "Matemática IV", semestre: 4, créditos: 3, código: "5534", prelación: ["5533"], tipo: "ciclo" },
  { nombre: "Derecho Mercantil", semestre: 4, créditos: 4, código: "5654", prelación: ["5653"], tipo: "ciclo" },

  // ADMINISTRACIÓN
  { nombre: "Administración II", semestre: 5, créditos: 4, código: "5225", prelación: ["5224"], tipo: "admin" },
  { nombre: "Desarrollo Económico I", semestre: 5, créditos: 4, código: "5425", prelación: ["5424"], tipo: "admin" },
  { nombre: "Estadística I", semestre: 5, créditos: 4, código: "5535", prelación: ["5533"], tipo: "admin" },
  { nombre: "Derecho del Trabajo", semestre: 5, créditos: 4, código: "5655", prelación: ["5653"], tipo: "admin" },
  { nombre: "Sociología", semestre: 5, créditos: 4, código: "5255", prelación: ["5423"], tipo: "admin" },

  { nombre: "Administración III", semestre: 6, créditos: 4, código: "5226", prelación: ["5225"], tipo: "admin" },
  { nombre: "Desarrollo Económico II", semestre: 6, créditos: 4, código: "5426", prelación: ["5425"], tipo: "admin" },
  { nombre: "Estadística II", semestre: 6, créditos: 4, código: "5536", prelación: ["5535"], tipo: "admin" },
  { nombre: "Fundamentos de Derecho Público", semestre: 6, créditos: 4, código: "5656", prelación: ["5653"], tipo: "admin" },
  { nombre: "Tecnología de la Información I", semestre: 6, créditos: 2, código: "5566", prelación: [], tipo: "admin" },

  { nombre: "Sistemas de Costos Industriales", semestre: 7, créditos: 3, código: "5217", prelación: ["5114", "5226"], tipo: "admin" },
  { nombre: "Administración de Personal", semestre: 7, créditos: 4, código: "5227", prelación: ["5226"], tipo: "admin" },
  { nombre: "Investigación de Operaciones", semestre: 7, créditos: 4, código: "5537", prelación: ["5533"], tipo: "admin" },
  { nombre: "Tecnología de la Información II", semestre: 7, créditos: 4, código: "5567", prelación: ["5566"], tipo: "admin" },
  { nombre: "Derecho Financiero", semestre: 7, créditos: 4, código: "5657", prelación: ["5656"], tipo: "admin" },

  { nombre: "Análisis de Estados Financieros I", semestre: 8, créditos: 4, código: "5118", prelación: ["5114", "5535"], tipo: "admin" },
  { nombre: "Sistemas y Procedimientos Administrativos", semestre: 8, créditos: 3, código: "5218", prelación: ["5226"], tipo: "admin" },
  { nombre: "Mercado y Publicidad I", semestre: 8, créditos: 4, código: "5238", prelación: ["5426", "5217"], tipo: "admin" },
  { nombre: "Seminario I", semestre: 8, créditos: 2, código: "5078", prelación: ["5363"], tipo: "admin" },

  { nombre: "Análisis de Estados Financieros II", semestre: 9, créditos: 4, código: "5119", prelación: ["5118"], tipo: "admin" },
  { nombre: "Presupuesto I", semestre: 9, créditos: 4, código: "5149", prelación: ["5217"], tipo: "admin" },
  { nombre: "Administración de la Producción", semestre: 9, créditos: 4, código: "5229", prelación: ["5217", "5537"], tipo: "admin" },
  { nombre: "Mercado y Publicidad II", semestre: 9, créditos: 4, código: "5239", prelación: ["5238"], tipo: "admin" },
  { nombre: "Seminario II", semestre: 9, créditos: 2, código: "5079", prelación: ["5363"], tipo: "admin" },
  { nombre: "Electiva I", semestre: 9, créditos: 3, código: "5209", prelación: [], tipo: "admin" },
  { nombre: "Pasantía", semestre: 9, créditos: 3, código: "5289", prelación: [], tipo: "admin" },

  { nombre: "Presupuesto II", semestre: 10, créditos: 4, código: "5160", prelación: ["5149"], tipo: "admin" },
  { nombre: "Administración Pública", semestre: 10, créditos: 4, código: "5220", prelación: ["5226", "5656"], tipo: "admin" },
  { nombre: "Planificación Microeconómica", semestre: 10, créditos: 4, código: "5420", prelación: ["5426"], tipo: "admin" }
];

// 🔧 Renderizado dinámico de la malla
function crearElementoMateria(materia) {
  const div = document.createElement("div");
  div.className = "materia";
  div.inner

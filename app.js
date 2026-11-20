// ===== Datos (localStorage) =====
const CLAVE = "libros";
const cargar = () => JSON.parse(localStorage.getItem(CLAVE) || "[]");
const guardarTodo = (libros) => localStorage.setItem(CLAVE, JSON.stringify(libros));

let libros = cargar();

// ===== Elementos =====
const $ = (id) => document.getElementById(id);
const campos = { id: $("id"), titulo: $("titulo"), autor: $("autor"), genero: $("genero"), estado: $("estado") };

// ===== READ: mostrar libros =====
function renderizar() {
  const texto = $("buscar").value.trim().toLowerCase();
  const visibles = libros.filter(l =>
    l.titulo.toLowerCase().includes(texto) || l.autor.toLowerCase().includes(texto));

  $("contador").textContent = `(${visibles.length})`;
  const lista = $("lista");
  lista.innerHTML = "";

  if (visibles.length === 0) {
    lista.innerHTML = `<li class="vacio" style="display:block;border-left-width:1px">
      ${libros.length ? "No hay libros que coincidan con la búsqueda." : "Aún no tienes libros. Agrega el primero con el formulario."}</li>`;
    return;
  }

  visibles.forEach(l => {
    const li = document.createElement("li");
    li.dataset.estado = l.estado;
    li.innerHTML = `
      <div>
        <div class="titulo"></div>
        <div class="meta"></div>
      </div>
      <div class="row-actions">
        <button data-accion="editar">Editar</button>
        <button data-accion="eliminar" class="danger">Eliminar</button>
      </div>`;
    // textContent evita inyección de HTML
    li.querySelector(".titulo").textContent = l.titulo;
    li.querySelector(".meta").textContent = `${l.autor} · ${l.genero} · ${l.estado}`;
    li.querySelector('[data-accion="editar"]').onclick = () => iniciarEdicion(l.id);
    li.querySelector('[data-accion="eliminar"]').onclick = () => eliminar(l.id);
    lista.appendChild(li);
  });
}

// ===== CREATE y UPDATE =====
function guardar() {
  const titulo = campos.titulo.value.trim();
  const autor = campos.autor.value.trim();
  if (!titulo || !autor) {
    $("error").textContent = "Escribe el título y el autor para guardar el libro.";
    return;
  }
  $("error").textContent = "";

  const datos = { titulo, autor, genero: campos.genero.value, estado: campos.estado.value };

  if (campos.id.value) {
    // UPDATE: reemplaza los datos del libro existente
    libros = libros.map(l => l.id === campos.id.value ? { ...l, ...datos } : l);
  } else {
    // CREATE: agrega un libro nuevo con id único
    libros.push({ id: crypto.randomUUID(), ...datos });
  }
  guardarTodo(libros);
  limpiarFormulario();
  renderizar();
}

function iniciarEdicion(id) {
  const l = libros.find(x => x.id === id);
  campos.id.value = l.id;
  campos.titulo.value = l.titulo;
  campos.autor.value = l.autor;
  campos.genero.value = l.genero;
  campos.estado.value = l.estado;
  $("form-title").textContent = "Editar libro";
  $("guardar").textContent = "Guardar cambios";
  $("cancelar").hidden = false;
  campos.titulo.focus();
}

function limpiarFormulario() {
  Object.values(campos).forEach(c => c.value = c.tagName === "SELECT" ? c.options[0].value : "");
  $("form-title").textContent = "Agregar libro";
  $("guardar").textContent = "Guardar libro";
  $("cancelar").hidden = true;
}

// ===== DELETE =====
function eliminar(id) {
  const l = libros.find(x => x.id === id);
  if (!confirm(`¿Eliminar "${l.titulo}"? Esta acción no se puede deshacer.`)) return;
  libros = libros.filter(x => x.id !== id);
  guardarTodo(libros);
  if (campos.id.value === id) limpiarFormulario();
  renderizar();
}

// ===== Eventos =====
$("guardar").onclick = guardar;
$("cancelar").onclick = limpiarFormulario;
$("buscar").oninput = renderizar;
document.querySelectorAll("#form input[type=text]").forEach(i =>
  i.addEventListener("keydown", e => { if (e.key === "Enter") guardar(); }));

renderizar();

# Mi Biblioteca

## Descripción
Aplicación web CRUD para registrar libros (título, autor, género y estado de lectura).
Desarrollada con ayuda de IA para el seminario **Gestión de Software Ágil asistido por Inteligencia Artificial**.

- **Create:** agregar un libro nuevo con el formulario.
- **Read:** ver la lista de libros y buscar por título o autor.
- **Update:** editar un libro existente.
- **Delete:** eliminar un libro (con confirmación).

## Tecnologías
- HTML5
- CSS3 (diseño responsive con CSS Grid y variables)
- JavaScript (vanilla)
- localStorage (los datos quedan guardados en el navegador)
- IA usada: Claude (Anthropic)

## Cómo ejecutar
1. Clona el repositorio: `git clone https://github.com/TU_USUARIO/mi-biblioteca-crud.git`
2. Abre la carpeta del proyecto.
3. Abre `index.html` en tu navegador (doble clic). No necesita instalar nada.

## Capturas de pantalla
> Agrega aquí tus capturas (carpeta `capturas/`):
> - `![Lista de libros](capturas/lista.png)`
> - `![Formulario de edición](capturas/editar.png)`

## Prompts utilizados

| # | Prompt (qué pedí) | Para qué |
|---|---|---|
| 1 | "Ayúdame a crear una aplicación web CRUD sencilla con HTML, CSS, JavaScript y localStorage. Quiero que gestione libros con título, autor, género y estado." | Obtener la estructura base del proyecto y definir el tema. |
| 2 | "Crea el formulario HTML con campos de título, autor, género (select) y estado (select), y una lista donde se muestren los libros." | Construir la interfaz (parte visual). |
| 3 | "Implementa la función Create: guardar un libro nuevo en localStorage con un id único." | Cumplir la C del CRUD. |
| 4 | "Implementa la función Read: mostrar los libros guardados en una lista y un mensaje cuando no haya ninguno." | Cumplir la R del CRUD. |
| 5 | "Implementa Update: al pulsar Editar, cargar los datos en el formulario y guardar los cambios sin duplicar el libro." | Cumplir la U del CRUD. |
| 6 | "Implementa Delete con una confirmación antes de borrar." | Cumplir la D del CRUD y evitar borrados accidentales. |
| 7 | "Refactoriza el código: separa las funciones, comenta cada parte del CRUD y evita inyección de HTML al mostrar los datos." | Mejorar la calidad y seguridad del código. |
| 8 | "Agrega validación (campos obligatorios) y un buscador por título o autor." | Mejorar la experiencia de usuario. |
| 9 | "Mejora el diseño con CSS: que sea responsive, con colores según el estado del libro y foco visible en el teclado." | Mejorar el aspecto visual y la accesibilidad. |
| 10 | "Escribe el README con descripción, tecnologías, instrucciones y la lista de prompts." | Documentar el proyecto para la entrega. |

## Autor
Tu nombre — Seminario de Gestión de Software Ágil

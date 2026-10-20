
# 🐾 Administrador de Citas — Veterinaria

Aplicación web para registrar y administrar citas de pacientes (mascotas) de una veterinaria: alta, edición y eliminación desde una sola interfaz, con validación y notificaciones.

**[🚀 Ver demo en vivo](https://veterinariacitas.vercel.app)**

<img width="1779" height="930" alt="administrador_citas" src="https://github.com/user-attachments/assets/b81600fb-78ad-455d-b7dc-c20fc7715d89" />

> 📚 **Sobre este proyecto:** la base está construida siguiendo un curso de JavaScript Moderno. Lo uso como práctica de fundamentos y como punto de partida para agregar mejoras propias, que están listadas abajo en el roadmap.

---

## Funcionalidades actuales

- Registro de citas con paciente, propietario, correo, fecha y síntomas
- Validación: no permite enviar el formulario con campos vacíos
- Notificaciones de error y éxito que desaparecen automáticamente
- Edición de citas: el mismo formulario se reutiliza y cambia a "Guardar Cambios"
- Eliminación de citas
- Mensaje cuando no hay pacientes registrados

## 🧩 Tecnologías y conceptos aplicados

- Clases en JavaScript: `AdminCitas` (estado y renderizado) y `Notificacion` (alertas de interfaz)
- Actualizaciones inmutables del estado con spread, `map` y `filter`
- Manipulación del DOM con la API nativa, sin librerías
- Manejo de eventos y de formularios

## 🗺️ Roadmap: mejoras que voy a agregar

**Prioridad alta (calidad y seguridad)**
- [ ] Evitar inyección de HTML: renderizar los datos del usuario con `textContent` en lugar de `innerHTML`
- [ ] Persistencia de datos con `localStorage`, para que las citas sobrevivan a una recarga
- [ ] Botón para cancelar la edición y corregir el caso de eliminar una cita mientras se edita

**Prioridad media (experiencia de usuario)**
- [ ] Formato de fecha legible y orden de citas por fecha
- [ ] Búsqueda y filtro por nombre del paciente o propietario
- [ ] Confirmación antes de eliminar una cita
- [ ] Mejoras de accesibilidad: `aria-label` en los botones y avisos con `aria-live`
- [ ] Diseño responsivo revisado en celular

**Prioridad baja (arquitectura y crecimiento)**
- [ ] Vista de historial por paciente
- [ ] Validación más completa (formato de correo, fechas pasadas)
- [ ] Versión full stack con Node.js + MongoDB, para guardar las citas en una base de datos real

## 🛠️ Stack

`HTML5` · `Tailwind CSS` · `JavaScript ES6+` · `Vercel`

---

### 👤 Autor

**Ángel Marco Martínez Cobos** — Estudiante de Ing. en TI, UPChiapas

[GitHub](https://github.com/angelcobos380-art) · [LinkedIn](https://www.linkedin.com/in/angel-marco-martinez-cobos-b68184432)

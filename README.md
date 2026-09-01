# Tablero de Hábitos

## Descripción del proyecto

Este proyecto es un mini sitio interactivo para gestionar hábitos diarios. La aplicación permite:

- Agregar nuevos hábitos.
- Marcar un hábito como completado o pendiente.
- Eliminar hábitos.
- Guardar la información en localStorage para conservar los datos al recargar la página.

La interfaz está construida con HTML, Bootstrap y JavaScript puro, siguiendo una estructura simple y responsiva.

## Objetivos de la entrega

El proyecto está orientado a cumplir con los requisitos del entregable:

- Estructura HTML/Bootstrap responsiva.
- Modelo de datos con JavaScript ES6+.
- Renderizado dinámico del DOM.
- Delegación de eventos con un único listener.
- Funcionalidad completa: agregar, completar y eliminar.
- Control de versiones con Git/GitHub aplicado al flujo de trabajo.

## Tecnologías usadas

- HTML5
- CSS3
- Bootstrap 5
- JavaScript ES6+
- Git + GitHub
- localStorage

## Requisitos previos

- Tener un navegador moderno instalado.
- Tener Git instalado en la computadora.
- Opcional: tener una cuenta de GitHub para subir el proyecto.

## Cómo ejecutar el proyecto

1. Clona este repositorio:

   ```bash
   git clone <url-del-repositorio>
   ```

2. Entra a la carpeta del proyecto:

   ```bash
   cd TrackerDeHabiitos
   ```

3. Abre el archivo `index.html` directamente en el navegador.

4. Para ver la app en un servidor local opcional, puedes ejecutar:

   ```bash
   python -m http.server 8000
   ```

   Luego abre en el navegador:

   ```text
   http://localhost:8000
   ```

## Funcionalidades principales

### Agregar hábito
El usuario escribe el nombre del hábito en el formulario y lo agrega a la lista.

### Marcar como completado
Al hacer clic sobre un hábito, se alterna entre pendiente y completado.

### Eliminar hábito
Se elimina el hábito seleccionado y también se actualiza el estado general de la lista.

### Persistencia
Los hábitos se guardan en localStorage para no perderse al recargar la página.

## Cumplimiento del entregable

### Git/GitHub
Se mantiene un historial de commits y trabajo organizado por ramas, con objetivo de cumplir el flujo de desarrollo iterativo.

### HTML/Bootstrap
La estructura está dividida en panel lateral y contenido principal, con diseño responsivo y limpio.

### JavaScript ES6+
Se usan variables con `const` y `let`, funciones flecha, destructuring, `filter`, `find` y `forEach`.

### Renderizado dinámico
La lista de hábitos se genera desde el arreglo de datos y no se escribe manualmente en HTML.

### Delegación de eventos
Se usa un solo listener sobre el contenedor principal para manejar la mayoría de las interacciones.

### Funcionalidad completa
La app permite agregar, marcar y eliminar hábitos sin errores.

## Estructura del proyecto

```text
TrackerDeHabiitos/
├── index.html
├── style.css
├── app.js
├── README.md
└── .git/
```

## Historial sugerido de ramas

```text
main
└── feature/documentacion
```

Este flujo permite separar la documentación del proyecto del desarrollo funcional y mantener un historial claro.

## Autor

Proyecto desarrollado como entregable de la asignatura de Web 2.

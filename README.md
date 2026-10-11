# Pizzería Mamma Mía

#Link del Deploy: (pendiente)

Landing page de una pizzería ficticia, hecha con React y Vite. En este hito se implementó el enrutamiento con React Router: la aplicación ahora tiene varias vistas (inicio, registro, login, carrito, detalle de pizza, perfil y página 404) y se navega entre ellas con enlaces `Link`, sin recargar la página.

Proyecto correspondiente al Hito 5 del módulo de React Router I de Desafío Latam (continuación del Hito 4).

## Backend

Las páginas Home y Pizza consumen una API de pizzas, por lo que necesitan el backend de apoyo del curso corriendo en `http://localhost:5000` (no forma parte de este repositorio).

1. Descarga el backend de apoyo ("Backend Pizzas").
2. `npm install`
3. `npm start` → queda escuchando en el puerto 5000.

## Rutas

| Ruta | Componente |
|---|---|
| `/` | Home |
| `/register` | Register |
| `/login` | Login |
| `/cart` | Cart |
| `/pizza/p001` | Pizza |
| `/profile` | Profile |
| `/404` | NotFound |
| cualquier otra ruta | NotFound |

## Cómo usarlo

Con el backend corriendo, navega desde el menú superior: Inicio (catálogo de pizzas), Perfil, Iniciar Sesión y Registrarse. El botón "🛒 Total: $xxx" lleva al carrito, donde se pueden aumentar o disminuir las cantidades; el total del botón y el del carrito se mantienen sincronizados. Si entras a una ruta que no existe, verás la página 404 con un enlace para volver al inicio.

El email y el botón "Cerrar sesión" de Perfil son estáticos por ahora; la autenticación se implementará en los siguientes hitos.

## Tecnologías

React · Vite · React Router (`react-router-dom`: `BrowserRouter`, `Routes`, `Route`, `Link`) · Bootstrap 5 · JavaScript (`fetch`, `useEffect`, `useState`, props)

## Estructura

```
Hito5_Pizzeria_Mamma_Mía/
├── public/
│   └── img/                (p001.avif … p006.avif)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Header.jsx
│   │   ├── CardPizza.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Register.jsx
│   │   ├── Login.jsx
│   │   ├── Cart.jsx
│   │   ├── Pizza.jsx
│   │   ├── Profile.jsx
│   │   └── NotFound.jsx
│   ├── data/
│   │   └── pizzas.js
│   ├── utils/
│   │   └── formatNumber.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── README.md
```

## Ejecutar

```
npm install
npm run dev
```

(requiere el backend corriendo en paralelo, ver sección "Backend")

## Requerimientos de la prueba

| # | Requerimiento | Dónde se cumple |
|---|---|---|
| 1 | Instalación y configuración de React Router | `package.json` (`react-router-dom`), `main.jsx` (`BrowserRouter`) |
| 2 | Home, Register, Login, Cart y Pizza en la carpeta `pages` | `src/pages/` |
| 3 | Rutas `/`, `/register`, `/login`, `/cart`, `/pizza/p001`, `/profile` y `/404` | `App.jsx` |
| 4 | Componente NotFound con enlace a `/`, mostrado cuando una ruta no existe | `NotFound.jsx`, ruta `*` en `App.jsx` |
| 5 | Componente Profile con email y botón de cerrar sesión (estáticos) | `Profile.jsx` |
| 6 | Navbar con enlaces `Link` y botón "🛒 Total: $xxx" hacia `/cart` | `Navbar.jsx` |

## Autor

Patricio Tapia L. — Proyecto desarrollado para el módulo de React Router I del curso Desarrollo Full Stack de Desafío Latam.
# Hito5_Pizzeria_Mamma_M-a-

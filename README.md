# GifFinder — Repositorio base

Repositorio de partida del taller **React + TypeScript + Vite + PWA con la API de GIPHY**. Los estilos (CSS nativo, Mobile First), los íconos y todos los componentes visuales ya están listos. Tu trabajo es escribir la lógica siguiendo la guía: cada archivo pendiente tiene un comentario `📌 PASO N`.

## Requisitos

- Node.js 20.19 o superior (recomendado 22 LTS)
- Git y una cuenta de GitHub
- Una API key gratuita de GIPHY: https://developers.giphy.com/dashboard/

## Puesta en marcha

```bash
npm install
cp .env.example .env      # Windows PowerShell: Copy-Item .env.example .env
# Abre .env y pega tu API key en VITE_GIPHY_API_KEY
npm run dev
```

## Patrón de diseño

**Contenedor / Presentacional + Custom Hooks + capa de servicios con Adapter.**

| Carpeta | Rol |
|---|---|
| `components/` | Presentacionales: solo reciben props y pintan |
| `pages/` | Contenedores: usan hooks y reparten datos por props |
| `hooks/` | Custom hooks: `useAuth`, `useDebounce`, `useGifs`, `useInstallPrompt` |
| `context/` | Estado global de la sesión |
| `services/` | El único lugar que habla con el exterior |
| `adapters/` | Traduce la respuesta de GIPHY al tipo `Gif` |
| `types/` | Tipos de dominio, DTO de GIPHY y evento de instalación PWA |

## Estructura

```
src/
├── main.tsx / App.tsx / index.css / vite-env.d.ts
├── config/       env.ts
├── constants/    gifs.ts
├── types/        gif.ts · auth.ts · giphy.ts · pwa.d.ts
├── adapters/     gifAdapter.ts
├── services/     giphyService.ts · authService.ts
├── context/      AuthContext.ts · AuthProvider.tsx
├── hooks/        useAuth.ts · useDebounce.ts · useGifs.ts · useInstallPrompt.ts
├── routes/       ProtectedRoute.tsx
├── pages/        LoginPage.tsx · GifsPage.tsx · NotFoundPage.tsx
└── components/
    ├── auth/      LoginForm
    ├── gifs/      GifGrid · GifCard · SearchBar · QuickFilters
    ├── layout/    AppHeader · PoweredByGiphy
    ├── feedback/  Loader · StatusMessage · Toast
    └── pwa/       InstallButton · IOSInstallHint
```

## Scripts

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo en http://localhost:5173 |
| `npm run build` | Revisa tipos con TypeScript y genera `dist/` (incluye el service worker) |
| `npm run preview` | Sirve `dist/` en http://localhost:4173 (para probar la PWA) |
| `npm run lint` | Revisa el código con oxlint |

## Publicar

El archivo `vercel.json` hace que todas las rutas de la SPA respondan con `index.html`. En Vercel, agrega `VITE_GIPHY_API_KEY` y `VITE_GIPHY_BASE_URL` en **Environment Variables**.

---
Prof. Edwin Rozo Gómez


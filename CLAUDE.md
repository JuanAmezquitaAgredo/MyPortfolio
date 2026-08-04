# CLAUDE.md

Este archivo brinda guía a Claude Code (claude.ai/code) para trabajar con el código de este repositorio.

## Comandos

- `npm run dev` — inicia el servidor de desarrollo (http://localhost:3000)
- `npm run build` — build de producción
- `npm run start` — sirve el build de producción
- `npm run lint` — corre las validaciones de Next.js/ESLint

No hay suite de tests configurada en este repositorio.

## Estructura del proyecto

```
├── public/
│   ├── docs/                          # PDF de la hoja de vida (HV_Juan.pdf)
│   └── images/                        # Imágenes estáticas (perfil, fondos, capturas de proyectos)
├── src/
│   ├── app/
│   │   ├── (seccions)/                # Route group: páginas con Navbar + Footer compartidos
│   │   │   ├── about/page.tsx
│   │   │   ├── contact/page.tsx
│   │   │   ├── projects/page.tsx
│   │   │   └── layout.tsx             # Layout compartido (Navbar + Footer)
│   │   ├── fonts/                     # Fuentes locales (Geist)
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx                 # Root layout (fuentes, metadata, <html>/<body>)
│   │   └── page.tsx                   # Home ("/"), fuera del route group
│   └── components/
│       ├── UI/                        # Componentes de UI reutilizables
│       │   ├── cartProject/cartProject.tsx
│       │   └── modal/modal.tsx
│       ├── footer/footer.tsx
│       ├── home/home.tsx
│       └── navbar/navbar.tsx
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Arquitectura

Este es un sitio de portafolio personal construido con Next.js 14 (App Router), TypeScript y Tailwind CSS.

- **Route groups**: `src/app/(seccions)/` es un route group (no agrega segmento a la URL) que envuelve las páginas `about`, `projects` y `contact` con un `layout.tsx` compartido que contiene el `Navbar` y el `Footer`. El `src/app/page.tsx` raíz (home) está fuera de este grupo y se renderiza sin ese navbar/footer en su propio layout — revisa `src/app/(seccions)/layout.tsx` antes de agregar nuevas rutas que deban compartir nav/footer.
- **Alias de rutas**: `@/*` apunta a `src/*` (ver `tsconfig.json`).
- **Organización de componentes**: `src/components/` contiene secciones a nivel de página (`home`, `navbar`, `footer`) y `src/components/UI/` contiene piezas de UI reutilizables (`modal`, `cartProject`). Sigue la convención existente de carpeta por componente `nombreComponente/nombreComponente.tsx` al agregar nuevos componentes.
- **Datos de proyectos**: La página de proyectos (`src/app/(seccions)/projects/page.tsx`) tiene hardcodeadas las entradas de proyectos (título, descripción, imagen, links) en un array local y las renderiza mediante el componente `Card` (`src/components/UI/cartProject/cartProject.tsx`). No hay capa de CMS/datos — para agregar nuevos proyectos hay que editar ese array y agregar la imagen referenciada en `public/images/`.
- **Modal**: `src/components/UI/modal/modal.tsx` usa `ReactDOM.createPortal` para renderizar dentro de `document.body`; se usa en la página About para previsualizar/descargar el PDF de la hoja de vida servido desde `public/docs/`.
- **Formulario de contacto**: `src/app/(seccions)/contact/page.tsx` envía los mensajes del lado del cliente vía `emailjs-com` con las claves de servicio/plantilla/pública hardcodeadas — no hay una ruta de API backend involucrada.
- **Assets estáticos**: imágenes en `public/images/`, PDF de la hoja de vida en `public/docs/`, fuentes locales (Geist) cargadas vía `next/font/local` en `src/app/layout.tsx`.
- **Estilos**: Tailwind CSS con un tema personalizado pequeño (variables CSS `background`/`foreground` en `tailwind.config.ts`); la mayoría de los componentes usan clases utilitarias inline en vez de módulos de estilo compartidos.

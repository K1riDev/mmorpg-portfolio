# 🏰 KiriDev Portfolio - MMORPG Theme

Un portfolio personal con diseño inspirado en videojuegos MMORPG, construido con Astro 5.10+ y TailwindCSS 4.

## ✨ Características

- 🎮 **Diseño MMORPG**: Interfaz inspirada en videojuegos con efectos de brillo, HUD y estética fantástica
- 🌍 **i18n Nativo**: Soporte completo para español e inglés usando la funcionalidad nativa de Astro
- 🎨 **TailwindCSS 4**: Estilos modernos con clases personalizadas para el tema gaming
- 🎬 **Animaciones GSAP**: Animaciones suaves y efectos parallax
- 📱 **Responsive**: Diseño totalmente responsive y accesible
- 🌓 **Tema Oscuro/Claro**: Toggle de tema con estilo de juego
- 🔔 **Notificaciones Toast**: Sistema de notificaciones estilizado
- 🐙 **GitHub Integration**: Muestra proyectos reales desde GitHub API
- 🚀 **Cloudflare Pages**: Desplegado en Cloudflare con SSR

## 🛠️ Stack Tecnológico

- **Framework**: Astro v5.10+ con TypeScript
- **Estilos**: TailwindCSS v4 + CSS personalizado
- **Animaciones**: GSAP + ScrollTrigger
- **Notificaciones**: @pheralb/toast
- **Deployment**: Cloudflare Pages + SSR
- **Package Manager**: pnpm

## 🚀 Instalación y Uso

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/KiriDev/mmorpg-portfolio.git
   cd mmorpg-portfolio
   ```

2. **Instalar dependencias**

   ```bash
   pnpm install
   ```

3. **Ejecutar en desarrollo**

   ```bash
   pnpm dev
   ```

4. **Build para producción**

   ```bash
   pnpm build
   ```

5. **Preview del build**
   ```bash
   pnpm preview
   ```

## 📁 Estructura del Proyecto

```
src/
├── components/         # Componentes reutilizables
│   ├── Navbar.astro
│   ├── ThemeToggle.astro
│   └── LanguageSwitcher.astro
├── layouts/           # Layouts de página
│   └── Layout.astro
├── pages/             # Páginas del sitio
│   ├── index.astro    # Inicio (ES)
│   ├── about.astro    # Acerca de (ES)
│   ├── projects.astro # Proyectos (ES)
│   ├── resume.astro   # CV (ES)
│   ├── contact.astro  # Contacto (ES)
│   └── en/            # Páginas en inglés
├── i18n/              # Internacionalización
│   ├── translations.ts
│   └── utils.ts
├── lib/               # Librerías y utilidades
│   ├── github.ts      # API de GitHub
│   ├── icons.ts       # Iconos SVG temáticos
│   └── animations.ts  # Animaciones GSAP reutilizables
├── styles/            # Estilos globales
│   └── global.css
└── ...
```

## 🎨 Diseño y Tema

### Paleta de Colores

- **Primary**: Cyan (#06b6d4)
- **Secondary**: Purple (#8b5cf6)
- **Accent**: Yellow (#eab308)
- **Background**: Dark Slate (#0f172a, #1e293b)
- **Text**: Slate White/Gray

### Tipografías

- **Headings**: Cinzel (serif, elegante)
- **UI Elements**: Orbitron (monospace, futurista)
- **Body**: Inter (sans-serif, legible)

### Efectos Especiales

- Efectos de brillo (glow effects)
- Bordes estilo HUD
- Animaciones de flotación
- Partículas de fondo
- Transiciones suaves

## 🌐 Internacionalización

El sitio soporta dos idiomas:

- **Español**: Ruta raíz (`/`)
- **Inglés**: Ruta con prefijo (`/en/`)

Las traducciones se encuentran en `src/i18n/translations.ts` y se utilizan mediante el helper `useTranslation()`.

## 🔧 Configuración

### Path Aliases

Se configuran alias de ruta para imports más limpios:

```typescript
// En lugar de: import Layout from '../../../layouts/Layout.astro'
import Layout from "@/layouts/Layout.astro";
```

### Scripts Disponibles

```bash
pnpm dev          # Servidor de desarrollo
pnpm build        # Build para producción
pnpm preview      # Preview del build
pnpm astro        # CLI de Astro
pnpm deploy       # Deploy a Cloudflare Pages
```

## 📄 Páginas

1. **Inicio**: Pantalla de bienvenida con estadísticas estilo gaming
2. **Acerca de**: Información personal con barras de habilidades
3. **Proyectos**: Showcase de proyectos con datos reales de GitHub
4. **CV**: Experiencia profesional y habilidades técnicas
5. **Contacto**: Formulario de contacto con redes sociales

## 🎯 Características Especiales

- **Pantalla de Carga**: Animación mágica al cargar el sitio
- **Efectos Parallax**: Elementos que responden al movimiento del mouse
- **Animaciones Scroll**: Elementos se animan al entrar en viewport
- **Tema Dinámico**: Toggle entre modo día/noche
- **GitHub API**: Muestra proyectos reales automáticamente
- **Responsive**: Optimizado para todos los dispositivos

## 🎮 Inspiración de Diseño

El diseño está inspirado en interfaces de MMORPG como:

- World of Warcraft
- Guild Wars 2
- Final Fantasy XIV
- League of Legends

Con elementos como:

- HUD transparente con bordes brillantes
- Botones con efectos de hover
- Barras de progreso estilo RPG
- Efectos de partículas y brillo
- Iconos temáticos de fantasía

## 📞 Contacto

- **Desarrollador**: KiriDev
- **GitHub**: [github.com/KiriDev](https://github.com/KiriDev)
- **mail**: [contact@kiridev.me](https://contact@kiridev.me)

---


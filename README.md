# Fluxo Landing Page

Landing page para la plataforma de gestión de negocios Fluxo, desarrollada con Next.js, React y Tailwind CSS.

## Tecnologías

- Next.js 15.2.4
- React 19
- Tailwind CSS
- Sanity CMS
- Framer Motion

## Configuración del Proyecto

### Requisitos Previos

- Node.js 18.0+
- pnpm 7.0+

### Instalación

1. Clona el repositorio
```bash
git clone https://github.com/tuusuario/fluxo-landing-page.git
cd fluxo-landing-page
```

2. Instala las dependencias
```bash
pnpm install
```

3. Crea un archivo `.env.local` en la raíz del proyecto basado en `.env.example`

4. Configura las variables de entorno de Sanity:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=tu-proyecto-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2023-05-03
```

### Ejecución del Proyecto

```bash
pnpm dev
```

La aplicación estará disponible en `http://localhost:3000`.

## Sanity CMS

Este proyecto utiliza Sanity como sistema de gestión de contenidos headless para administrar los testimonios, características, planes de precios y artículos de blog.

### Configuración de Sanity Studio

1. Crea una cuenta en [Sanity.io](https://www.sanity.io/) si aún no tienes una.

2. Crea un nuevo proyecto en Sanity y obtén tu Project ID.

3. Accede al Studio incorporado en el proyecto visitando:
```
http://localhost:3000/admin
```

4. Inicia sesión con tu cuenta de Sanity para comenzar a gestionar el contenido.

### Esquemas de Contenido

El CMS incluye los siguientes tipos de contenido:

- **Testimonios**: Opiniones de clientes sobre la plataforma.
- **Características**: Funcionalidades destacadas de Fluxo.
- **Planes de Precios**: Diferentes opciones de suscripción.
- **Blog**: Artículos del blog con categorías y autores.

### Publicación de Contenido

1. Accede al Studio de Sanity `/admin`
2. Crea o edita el contenido según sea necesario
3. Publica los cambios con el botón "Publish"
4. Los cambios se reflejarán automáticamente en la landing page

## Estructura del Proyecto

```
├── app/              # Rutas y páginas (Next.js App Router)
├── components/       # Componentes React
├── hooks/            # Hooks personalizados
├── lib/              # Utilidades y configuración
├── public/           # Archivos estáticos
├── sanity/           # Configuración de Sanity CMS
│   └── schemas/      # Esquemas de contenido
└── utils/            # Funciones de utilidad
```

## Personalización

### Tema y Colores

Los colores principales pueden modificarse en:
- `tailwind.config.ts` - Configuración general de Tailwind
- `app/globals.css` - Variables CSS y estilos globales

### Contenido

Todo el contenido dinámico se gestiona mediante Sanity CMS, accesible desde:
- `/admin` - Studio de Sanity para gestión de contenido

## Autor

Fluxo Team

## Licencia

Este proyecto está bajo la licencia MIT. 
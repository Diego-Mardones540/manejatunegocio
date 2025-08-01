/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
        colors: {
    'background': '#111111', // Fondo oscuro (se ve igual en la imagen)
    'surface': '#1C1C1C',    // Un gris más claro para elementos
    'text-primary': '#F1F1F1', // Texto principal (se ve así en el título)
    'text-secondary': '#A1A1A1', // Texto secundario (descripciones)
    'accent': '#39FF14',       // Color de acento (verde brillante)
    'accent-hover': '#8FFF7D', // Tono de acento para el hover
  }
    },
  },
  plugins: [],
}
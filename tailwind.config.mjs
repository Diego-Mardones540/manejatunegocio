/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'background': '#111111',
        'surface': '#1C1C1C',
        'text-primary': '#F1F1F1',
        'text-secondary': '#A1A1A1',
        'accent': '#39FF14',
        'accent-hover': '#8FFF7D',
      }
    },
  },
  plugins: [],
}
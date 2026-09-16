/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#07090D',
        surface: '#0D1117',
        'surface-secondary': '#111720',
        primary: '#F5F7FA',
        secondary: '#8B95A5',
        muted: '#5F6875',
        accent: '#00E5FF',
        'accent-secondary': '#8B5CF6',
      },
      fontFamily: {
        primary: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};

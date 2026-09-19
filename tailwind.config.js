/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html","src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{
      background: 'var(--color-background)',
      foreground: 'var(--color-foreground)',
      card: 'var(--color-card)',
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      muted: 'var(--color-muted)',
      'muted-foreground': 'var(--color-muted-foreground)',
      border: 'var(--color-border)',
      highlight: 'var(--color-highlight)',
      surface: 'var(--color-surface)',
      }
    },
  },
  plugins: [],
}


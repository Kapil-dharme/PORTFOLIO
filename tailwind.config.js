/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        'on-background': '#111827',
        primary: '#111827',
        'on-primary': '#ffffff',
        secondary: '#6b7280',
        'on-surface-variant': '#4b5563',
        'outline-variant': '#e5e7eb',
        'surface-container-high': '#f3f4f6',
        tertiary: '#374151',
        'primary-container': '#1f2937',
      },
      maxWidth: {
        'container-max': '1200px',
      },
      spacing: {
        'gutter': '1.5rem',
        'section-padding-mobile': '2.5rem',
        'section-padding-desktop': '4.5rem',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'widest': '0.15em',
      },
    },
  },
  plugins: [],
};

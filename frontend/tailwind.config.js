/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './project-bd/index.html',
    './project-bd/src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6D28D9',
          50: '#F5F3FF',
          100: '#EDE9FE',
        },
        accent: '#7C3AED',
        muted: '#6b7280',
        surface: '#ffffff',
        bg: '#f8fafc'
      },
      boxShadow: {
        'soft': '0 6px 18px rgba(15, 23, 42, 0.06)'
      }
    },
  },
  plugins: [],
}


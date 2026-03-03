import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0a0e27',
          800: '#111827',
          700: '#1a1f3a',
        },
        gold: {
          400: '#d4af37',
          500: '#c5a028',
        }
      },
    },
  },
  plugins: [],
}
export default config

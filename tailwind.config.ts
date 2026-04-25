import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        gold: '#C1A452',
        charcoal: '#1A1A1A',
        sand: '#F5F2ED',
      },
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'Cormorant', 'Georgia', 'serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config

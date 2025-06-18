import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366f1',
          dark: '#4f46e5',
        },
        secondary: {
          DEFAULT: '#ec4899',
          dark: '#db2777',
        },
        accent: {
          DEFAULT: '#22d3ee',
          dark: '#06b6d4',
        },
        background: {
          DEFAULT: '#111827',
          dark: '#0f172a',
          darker: '#0a0f1a',
          darkest: '#05070d',
        },
        text: {
          DEFAULT: '#f3f4f6',
          dark: '#e5e7eb',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, var(--tw-gradient-stops))',
        'gradient-dark': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
        'gradient-darker': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
        'gradient-darkest': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-in-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config 
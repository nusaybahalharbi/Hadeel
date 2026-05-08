/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f7f7f8',
          100: '#eeeef0',
          200: '#d8d8dd',
          300: '#b6b6bf',
          400: '#8d8d99',
          500: '#6d6d79',
          600: '#565660',
          700: '#46464e',
          800: '#2c2c33',
          900: '#1a1a1f',
          950: '#0c0c10',
        },
        navy: {
          50: '#f1f4f9',
          100: '#dde4ee',
          200: '#bcc9dc',
          300: '#8fa4c2',
          400: '#647ea4',
          500: '#475e85',
          600: '#374a69',
          700: '#2c3a54',
          800: '#222b3e',
          900: '#0f1729',
          950: '#070b16',
        },
        gold: {
          50: '#fbf8ef',
          100: '#f5edd1',
          200: '#ecd99f',
          300: '#e0bf6a',
          400: '#d6a73e',
          500: '#c89230',
          600: '#a87327',
          700: '#875722',
          800: '#704522',
          900: '#5e3a22',
          950: '#361e10',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        widest2: '0.32em',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #e0bf6a 0%, #c89230 50%, #875722 100%)',
        'navy-gradient': 'linear-gradient(160deg, #0f1729 0%, #1a1a1f 100%)',
        'subtle-grid':
          'linear-gradient(to right, rgba(200,146,48,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(200,146,48,0.06) 1px, transparent 1px)',
        'noise':
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'shimmer': 'shimmer 3s linear infinite',
        'float': 'float 8s ease-in-out infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
      boxShadow: {
        'luxe': '0 30px 60px -20px rgba(15, 23, 41, 0.18), 0 18px 36px -18px rgba(15, 23, 41, 0.12)',
        'luxe-dark': '0 30px 60px -20px rgba(0, 0, 0, 0.6), 0 18px 36px -18px rgba(0, 0, 0, 0.4)',
        'gold-glow': '0 0 40px -10px rgba(200, 146, 48, 0.4)',
      },
    },
  },
  plugins: [],
};

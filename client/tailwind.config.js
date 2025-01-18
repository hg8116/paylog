/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "doto": ['Doto', 'sans-serif'],
        "host-grotesk": ['host-grotesk', 'sans-serif']
      },
      animation: {
        'track-letter': 'rotate-letter 10s linear infinite',
        wiggle: 'wiggle 3s ease-in-out infinite',
        'infinite-scroll': 'infinite-scroll 100s linear infinite'
      },
      keyframes: {
        'rotate-letter': {
          '0%, 80%': { transform: 'rotate(0deg)' }, // Idle state (no rotation)
          '30%': { transform: 'rotate(12deg)' }, // Rotate slightly
          '50%': { transform: 'rotate(-12deg)' }, // Rotate in opposite direction
          '70%': { transform: 'rotate(0deg)' }, // Back to idle state,
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' }
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        'g-100': '#d8f3dc',
        'g-200': '#b7e4c7',
        'g-300': '#95d5b2',
        'g-400': '#74c69d',
        'g-500': '#52b788',
        'g-600': '#40916c',
        'g-700': '#2d6a4f',
        'g-800': '#1b4332',
        'g-900': '#081c15',

        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}


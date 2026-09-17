import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0D0D11',
        deepPurple: '#1A0E2E',
        surface: '#1F1F24',
        accentViolet: '#6D4AFF',
        accentLavender: '#B89CFF',
        accentGradientEnd: '#A78BFA',
        subtleGray: '#2A2A32',
        lightGray: '#94A3B8',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
        display: ['Poppins', 'Outfit', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 25px rgba(109, 74, 255, 0.35)',
        glowLg: '0 0 45px rgba(109, 74, 255, 0.5)',
        card: '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at center, #1A0E2E 0%, #0D0D11 75%)',
        'violet-gradient': 'linear-gradient(135deg, #6D4AFF 0%, #A78BFA 100%)',
        'purple-card-gradient': 'linear-gradient(135deg, #1A0E2E 0%, #160B28 100%)',
        'quote-gradient': 'linear-gradient(135deg, #1A0E2E 0%, #2A174A 50%, #1A0E2E 100%)',
      },
    },
  },
  plugins: [],
};

export default config;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontSize: {
      sm: '1.2rem',
      base: '1.6rem',
      lg: '1.8rem',
      xl: '2rem',
      '2xl': '2.4rem',
      '3xl': '3rem',
      '4xl': '3.6rem',
      '5xl': '4.8rem',
    }
  },
  plugins: [],
  safelist: [
    {
      // Should match all grid cols or rows definition
      pattern: /grid-(cols|rows)-.+/
    },
    {
      // Should match all gap classes
      pattern: /gap-.+/
    },
    {
      // Should match classes for grid placement, like col-span-2 etc.
      pattern: /(col|row)-.+/
    },
    {
      pattern: /(justify|items)-.+/
    }
  ]
}

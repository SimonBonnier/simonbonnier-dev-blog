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
    }
  ]
}

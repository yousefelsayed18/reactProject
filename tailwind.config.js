/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{jsx,js,ts,tsx,html}',
    './index.html',
    'node_modules/flowbite-react/lib/esm/**/*.js'

  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
]
}


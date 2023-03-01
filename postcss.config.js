import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import tailwindConfig from './tailwind.config.js'

export default {
  plugins: [
    tailwind(tailwindConfig), 
    autoprefixer,
    ...(process.env.NODE_ENV === 'production' ? [cssnano] : [])
  ]
}
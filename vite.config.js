import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base : './',  //esto se lo agregue al final por que no esta resolbiendo las rutas de los archivbos en la version compilada para produccion
  plugins: [react()],
})

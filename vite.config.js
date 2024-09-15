export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    outDir: 'dist', // El directorio de salida para los archivos compilados
    assetsDir: 'assets', // Dónde se guardarán los assets como imágenes o CSS
  },
})

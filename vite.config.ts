import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import babel from 'vite-plugin-babel';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), babel({
   babelConfig: { presets: [
       '@babel/preset-env'
     ],
     plugins: [
       '@babel/plugin-proposal-optional-chaining',
       '@babel/plugin-proposal-optional-catch-binding'
     ]}
  })],
})

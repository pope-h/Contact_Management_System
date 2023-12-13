import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Contact_Management_System/frontend/",
  plugins: [react()],
  jsx: "react",
});

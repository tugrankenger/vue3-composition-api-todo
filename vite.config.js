import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint';
import ViteComponents, { AntDesignVueResolver } from 'vite-plugin-components';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [eslintPlugin(),
     vue(),
     ViteComponents({
      customComponentResolvers: [AntDesignVueResolver()],
    }),
    ],
})
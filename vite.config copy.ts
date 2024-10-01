import react from '@vitejs/plugin-react'

import { type UserConfig, defineConfig, loadEnv } from 'vite'

const viteConfig = defineConfig(defaultConfig => {
  const env = loadEnv(defaultConfig.mode, process.cwd(), ['VITE_', 'REACT_APP_'])

  const config: UserConfig = {
    appType: 'spa',
    envPrefix: ['VITE_', 'REACT_APP_'],
    define: {
      'process.env': env,
    },
    plugins: [
      react(),
    ],
    // This is for a problem with the poppers.js random, maybe can fixed with a new versions of vite and material.
    optimizeDeps: {
      include: ['@mui/material/Tooltip'
      ],
    }
  }

  if (defaultConfig.mode === 'development') {
    config.define.global = 'window'
  }

  return config
})

export default viteConfig
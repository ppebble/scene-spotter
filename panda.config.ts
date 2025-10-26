import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  outdir: 'styled-system',
  jsxFramework: 'react',
  theme: {
    extend: {
      tokens: {
        colors: {
          // 작품별 색상 토큰 정의
          'kimetsu-red': { value: '#dc2626' },
          'kimetsu-black': { value: '#1f2937' },
          'your-name-blue': { value: '#2563eb' },
          'your-name-green': { value: '#10b981' },
          'tokyo-revengers-orange': { value: '#f59e0b' },
        },
        fonts: {
          japanese: { value: 'var(--font-japanese)' },
        },
      },
      semanticTokens: {
        colors: {
          // 시맨틱 컬러 정의
          primary: { value: '{colors.kimetsu-red}' },
          secondary: { value: '{colors.kimetsu-black}' },
        },
      },
    },
  },
});

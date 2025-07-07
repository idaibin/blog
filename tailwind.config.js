/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // 启用 class 模式的暗色主题
  theme: {
    extend: {
      colors: {
        accent: 'rgb(var(--accent))',
        'accent-dark': 'rgb(var(--accent-dark))',
        black: 'rgb(var(--black))',
        gray: 'rgb(var(--gray))',
        'gray-light': 'rgb(var(--gray-light))',
        'gray-dark': 'rgb(var(--gray-dark))',
      },
      fontFamily: {
        atkinson: ['Atkinson', 'sans-serif'],
      },
    },
  },
};

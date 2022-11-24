/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2F80ED',
        indicator: '#F8B76B',
        indicator2: '#8785FF',
        indicator3: '#EB5757',
        indicator4: '#F2C94C',
        gray1: '#333333',
        gray2: '#4F4F4F',
        gray3: '#828282',
        gray4: '#BDBDBD',
        gray5: '#E0E0E0',
        chats1: '#FCEED3',
        chats2: '#EEDCFF',
        chats3: '#D2F2EA',
        chatsLabel1: '#E5A443',
        chatsLabel2: '#9B51E0',
        chatsLabel3: '#43B78D',
      },
    },
  },
  plugins: [],
};

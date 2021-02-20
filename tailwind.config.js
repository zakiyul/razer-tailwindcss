module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        banner:
          "url('https://assets2.razerzone.com/images/pnx.assets/4e1df9019f354d30707d2b44f673a0cb/razer-blade-15-ces-desktop-home-large.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

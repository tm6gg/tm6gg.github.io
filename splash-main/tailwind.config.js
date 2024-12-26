module.exports = {
  darkMode: 'class',
  content: ["./src/views/*.html", "./src/assets/js/*.js"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class',
    }),
  ],
}

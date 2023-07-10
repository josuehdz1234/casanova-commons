module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    "@babel/plugin-proposal-export-default-from",
    [
      "module-resolver",
      {
        alias: {
          "@i18n": "./src/utils/i18n",
          "@services": "./src/services",
          "@utils": "./src/utils",
          "@hooks": "./src/hooks",
          "@components": "./src/components",
          "@hocs": "./src/hocs",
          "src": "./src",
        },
      },
    ],
  ],
  exclude: ["./index.css.js", "theme.scss"],
};

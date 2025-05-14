export default {
  plugins: [
    require("postcss-preset-env")({
      stage: 1, // Enables future CSS features, including nesting
      features: {
        "nesting-rules": true,
      },
    }),
  ],
};

// postcss.config.js (ESM)
import postcssPresetEnv from "postcss-preset-env";

export default {
  plugins: [
    postcssPresetEnv({
      stage: 1,
      features: {
        "nesting-rules": true,
      },
    }),
  ],
};

import postcssFlexbugsFixes from 'postcss-flexbugs-fixes';
import postcssPresetEnv from 'postcss-preset-env';
import postcssNormalize from 'postcss-normalize';

export default {
  plugins: [
    postcssFlexbugsFixes,
    postcssPresetEnv({
      stage: 0,
    }),
    postcssNormalize,
  ],
};

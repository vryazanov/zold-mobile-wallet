module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['@babel/preset-flow', 'babel-preset-expo'],
  };
};

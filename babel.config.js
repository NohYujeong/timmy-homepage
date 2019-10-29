const presets = [
  '@babel/react',
  [
    '@babel/preset-env',
    {
      modules: false,
      loose: true,
    },
  ],
];

module.exports = { presets };

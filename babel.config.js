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

const plugins = [
  'react-hot-loader/babel',
]

module.exports = { presets, plugins };

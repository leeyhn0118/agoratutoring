const path = require('path');

const svg = require('next-react-svg');

require('dotenv').config();

module.exports = svg({
  compiler: {
    styledComponents: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  pageExtensions: ['jsx'],
  include: path.resolve(__dirname, 'src/assets/svg'),
  webpack(config) {
    config.module.rules.push({
      test: /\.(gql)$/,
      include: [path.resolve(__dirname, 'src')],
      exclude: /node_modules/,
      use: [
        {
          loader: 'graphql-tag/loader',
        },
      ],
    });

    return config;
  },
});

/**
 *
 * @flow
 */

'use strict';

const Gallery = require('./react-youtube-slide/Gallery');

module.exports = Gallery.default || Gallery;
module.exports = () => ({
    presets: [
      require("@babel/preset-env"),
    ],
    plugins: [
      [require("@babel/plugin-proposal-class-properties"), { loose: true }],
      require("@babel/plugin-proposal-object-rest-spread"),
    ],
  });
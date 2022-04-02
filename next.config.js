const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

// plugins that we'll be using in our project

module.exports = withPlugins([optimizedImages], { target: 'serverless' });

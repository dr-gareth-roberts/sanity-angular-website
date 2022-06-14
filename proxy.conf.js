const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'https://5mpxe9ut.api.sanity.io',
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
    secure: false,
  },
];

module.exports = PROXY_CONFIG;
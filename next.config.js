export function webpack(config) {
  config.module.rules.push({
    test: /\.svg$/,
    use: [{ loader: '@svgr/webpack', options: { icon: true } }]
  });
  return config;
}
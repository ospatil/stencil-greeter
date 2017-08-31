exports.config = {
  buildDir: 'dist/build',
  publicPath: '/dist/build',
  bundles: [
    { components: ['stencil-greeter'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}

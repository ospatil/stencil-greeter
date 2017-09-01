exports.config = {
  buildDir: 'lib/build',
  publicPath: '/lib/build',
  bundles: [
    { components: ['stencil-greeter'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}

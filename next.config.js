module.exports = {
  rewrites: function () {
    return [
      {
        destination: '/product/:path*',
        source: '/avocado/:path*',
      },
    ]
  },
}

const CracoLessPlugin = require('craco-less')

module.exports = {
    plugins: [
        {
          plugin: CracoLessPlugin,
          options: {
            lessLoaderOptions: {
              lessOptions: {
                modifyVars: { '@primary-color': '#004f7c' },
                javascriptEnabled: true,
              },
            },
          },
        },
      ],
}
const { defineConfig } = require('@vue/cli-service')
const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
        postcss: {
          postcssOptions:{
            plugins: [
                require('postcss-pxtorem')({
                    rootValue: 37.5,
                    propList: ['*']
                })
            ]
          }
        }
    }
  },
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  },
})

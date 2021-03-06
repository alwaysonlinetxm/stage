const path = require('path');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function makeWebpackConfig(env) {
  const distPath = path.join(__dirname, 'docs');

	return {
	  entry: './src/',
	  output: {
	    path: distPath,
	    filename: 'bundle.[hash].js'
	  },
	  devtool: 'cheap-module-source-map',
	  module: {
	    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
	    }, {
	      test: /\.scss$/,
	      exclude: /node_modules/,
				use: [
          'style-loader',
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							plugins: () => [
								autoprefixer()
              ]
						}
					},
					'sass-loader'
				]
	    }, {
	      test: /\.(png|jpg|jpeg|gif)$/,
	      exclude: /node_modules/,
	      use: 'url-loader?limit=8192&name=images/[name]-[hash:8].[ext]'
	    }, {
	      test: /\.(woff|svg|eot|ttf)$/,
	      exclude: /node_modules/,
	      use: 'url-loader?limit=10000&name=fonts/[name]-[hash:8].[ext]'
	    }]
	  },
    devServer: {
      port: 5000,
      inline: true,
      historyApiFallback: false,
      // stats: 'normal',
      contentBase: distPath,
      host: '0.0.0.0'
    },
	  plugins: [
			new webpack.HotModuleReplacementPlugin(),
			new CleanWebpackPlugin(distPath, {
	      root: __dirname,
	      verbose: true,
	      dry: false
	    }),
			new HtmlWebpackPlugin({
				template: './src/index.html',
				filename: 'index.html',
				minify: {
					minifyJS: true,
					collapseWhitespace: true,
					removeComments: true
				}
			}),
      new CopyWebpackPlugin([{
        toType: 'file',
        from: {
          glob: './img/*',
          dot: true
        },
        to: distPath + '/images'
      }])
	  ]
	};
}

const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
	...defaultConfig,
	plugins: [
		...defaultConfig.plugins,
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'src/vision-page-plugin/strategic-vision-2021.pdf'),
					to: path.resolve(__dirname, 'build/strategic-vision-2021.pdf'),
				},
			],
		}),
	],
};
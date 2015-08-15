var webpack = require("webpack");

module.exports = {
	entry: './src/diff.js',
	output: {
		filename: './lib/loot-diff.min.js',
		library: 'diff',
		libraryTarget: 'var'
	},
	externals: {
		lodash: "_"
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin()
	]
};
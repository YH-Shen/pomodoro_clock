const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPartialsPlugin = require("html-webpack-partials-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	devtool: "inline-source-map",
	plugins: [
		new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
		new HtmlWebpackPlugin({
			title: "Production",
		}),
		new HtmlWebpackPartialsPlugin({
			path: "./src/template.html",
		}),
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.wav$/i,
				use: [
					{
						loader: "file-loader",
					},
				],
			},
		],
	},
	resolve: {
		extensions: ["*", ".js", ".jsx"],
	},
	output: {
		path: __dirname + "/dist",
		publicPath: "",
		filename: "bundle.js",
	},
	devServer: {
		contentBase: "./dist",
	},
	watch: true,
	watchOptions: {
		aggregateTimeout: 600,
		poll: 1000,
	},
};

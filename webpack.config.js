import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default (env, argv) => {
	const isProduction = argv.mode === 'production';

	return {
		entry: './src/index.jsx',
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: isProduction ? '[name].[contenthash].js' : 'bundle.js',
			clean: true,
		},
		mode: isProduction ? 'production' : 'development',
		devtool: isProduction ? 'source-map' : 'inline-source-map',
		devServer: {
			static: path.resolve(__dirname, 'dist'),
			port: 3000,
			open: true,
		},
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					use: 'babel-loader',
				},
				{
					test: /\.css$/,
					use: [
						isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
						'css-loader',
					],
				},
			],
		},
		optimization: {
			minimize: isProduction,
			minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
		},
		resolve: {
			extensions: ['.js', '.jsx'],
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: './public/index.html',
				minify: isProduction && {
					collapseWhitespace: true,
					removeComments: true,
				},
			}),
			isProduction &&
				new MiniCssExtractPlugin({
					filename: '[name].[contenthash].css',
				}),
		].filter(Boolean),
	};
};

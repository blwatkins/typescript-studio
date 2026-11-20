/*
 * Copyright (c) 2024-2026 Brittni Watkins.
 */

import path from 'path';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
    entry: './src/main.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            favicon: './assets/icon/favicon.ico',
            template: './webpack/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash:6].css',
            chunkFilename: '[name].[contenthash:6].css'
        })
    ],
    optimization: {
        emitOnErrors: false
    },
    output: {
        path: path.resolve(__dirname, '_dist'),
        filename: '[name].[contenthash:6].js',
        chunkFilename: '[name].[contenthash:6].js',
        clean: true
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '_dist')
        },
        client: {
            overlay: true
        },
        compress: true,
        host: '127.0.0.1',
        port: 8080,
        hot: true,
        watchFiles: ['./src/**/*.ts'],
        liveReload: true,
        open: true,
        webSocketServer: 'ws'
    }
};

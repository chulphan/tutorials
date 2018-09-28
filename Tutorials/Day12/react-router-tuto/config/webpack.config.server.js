'use strict';

const path = require('path');
const webpack = require('webpack');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const getClientEnvironment = require('./env');
const paths = require('./paths');


const publicUrl = '';
const env = getClientEnvironment(publicUrl);

module.exports = {
    entry: paths.serverRenderJs,
    // Node.js 내장 모듈과 충돌이 일어나지 않으며 require로 불러올 수 있는 형태로 번들링한다.
    target: 'node',
    output: {
        // 정해준 서버경로에 render.js 라는 파일명으로 저장한다.
        path: paths.server,
        filename: 'render.js',
        libraryTarget: 'commonjs2' // node에서 불러올 수 있도록 commonjs2 스타일로 번들링한다.
    },
    resolve: {
        modules: ['node_modules', paths.appNodeModules].concat(
            process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
        ),
        extensions: ['.js', '.json', '.jsx'],
    },
    module: {
        strictExportPresence: true,
        rules: [
            //자바스크립트 이외의 파일들은 무시한다.
            {
                exclude: [
                    /\.(js|jsx)$/,
                    /\.json$/
                ],
                loader: 'ignore',
            },
            // 자바스크립트는 Babel을 통하여 트랜스파일링한다.
            {
                test: /\.(js|jsx)$/,
                include: paths.appSrc,
                exclude: /node_modules/,
                use: [{
                    loader: require.resolve('babel-loader'),
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        cacheDirectory:  true,
                        plugins: ['transform-class-properties']
                    }
                }],
            },
        ],
    },
    plugins: [
        // 필수 플러그인
        new webpack.DefinePlugin(env.stringified),
        new CaseSensitivePathsPlugin(),
        new WatchMissingNodeModulesPlugin(paths.appNodeModules),
    ]
};
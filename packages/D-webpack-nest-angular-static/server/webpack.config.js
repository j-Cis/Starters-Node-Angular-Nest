const webpack = require('webpack');
const path = require('path');
const {
    resolve
} = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: ['webpack/hot/poll?100', './packages/D-webpack-nest-angular-static/server/src/main.ts'],
    target: 'node',
    externals: [
        nodeExternals({
            whitelist: ['webpack/hot/poll?100'],
        }),
    ],
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }, ],
    },
    mode: 'development',
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.WatchIgnorePlugin([/\.js$/, /\.d\.ts$/])],
    output: {
        path: resolve('./packages/D-webpack-nest-angular-static/build/dev/'),
        filename: 'server.js',
    },
};

/*const webpack = require('webpack');
const path = require('path');
module.exports = {
    entry: './packages/D-webpack-nest-angular-static/server/src/main.ts',
    target: 'node',
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }, ],
    },
    mode: 'development',
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        path: path.join(__dirname, '..', 'build', 'dev'),
        filename: 'server.js',
    },
};*/
const babelLoaderConf = {
    loader: 'babel-loader',
    options: {
        presets: ['@babel/preset-env'],
        plugins: ["@babel/plugin-syntax-dynamic-import"]
    }
};

module.exports = {
    entry: {
        matrix_repl: './bin/matrix_repl.ts',
        matrix: './src/matrix.ts',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [babelLoaderConf, "ts-loader"],
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                use: babelLoaderConf
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    mode: "production",
    target: "node",
    optimization: {
        minimize: true
    }
}
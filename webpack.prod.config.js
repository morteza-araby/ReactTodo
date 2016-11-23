var webpack = require('webpack');
const path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var envFile = require('node-env-file')


process.env.NODE_ENV = process.env.NODE_ENV || 'development'

try {
    envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'))
} catch (e) {

}

const PATHS = {
    app: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'public')
};


module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        './src/index.js'
    ],
    externals: {
        jquery: 'jQuery'
    },
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },
    resolve: {
        root: __dirname,
		modulesDirectories: [ //No need for alias anymore, I just keep it for remembering.
			'node_modules',
			'./src/components',
            './src/api',            
            './src/reducers',
            './src/actions'
		],
        alias: {
            Src: PATHS.app,
            Components: PATHS.app + '/components',
            Main: PATHS.app + '/components/Main.js',
            Reducers: PATHS.app + '/reducers',
            Actions: PATHS.app + '/actions',
            configureStore: PATHS.app + '/store/configureStore.js'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!' + 'css?sourceMap'
            },
            {
                test: /\.scss$/,
                loader: 'style!' + 'css?sourceMap' + '!sass?sourceMap'
            },
            {
                test: /\.(json)/,
                exclude: /node_modules/,
                loader: 'json-loader'
            },
            {
                test: /\.(svg|ttf|woff|woff2|eot)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            },
            {
                test: /\.png$/,
                loader: 'file'
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file'
            }
        ]
    },
     sassLoader: {
        includePaths: [
            path.resolve(__dirname, './node_modules/foundation-sites/scss')
        ]
    },
    plugins: [
        //  new CleanWebpackPlugin([PATHS.build], {
        //      root: __dirname,
        //      verbose: true,
        //      dry: false,
        //      exclude: ['shared.js']
        //  }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new CopyWebpackPlugin([
            {
                from: PATHS.app + "/index.html",
                to: ""
            },
            {
                from: PATHS.app + "/assets/favicon.ico",
                to: ""
            } 
        ]),
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                API_KEY: JSON.stringify(process.env.API_KEY),
                AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
                DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
                STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET),
                MESSAGING_SENDER_ID: JSON.stringify(process.env.MESSAGING_SENDER_ID),
                GITHUB_ACCESS_TOKEN: JSON.stringify(process.env.GITHUB_ACCESS_TOKEN)
            }
        })        
    ],
    /* devtool: 'cheap-module-eval-source-map',*/
    devtool: process.env.NODE_ENV === 'production' ? undefined : 'source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: PATHS.build
    }
};

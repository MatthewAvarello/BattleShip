import merge from 'webpack-merge';
import commonConfig from './webpack.common.js';

module.exports = merge(commonConfig, {
    mode: 'production',
    devtool: 'source-map',
});

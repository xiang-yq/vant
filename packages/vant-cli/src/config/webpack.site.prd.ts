import merge from 'webpack-merge';
import { get } from 'lodash';
import { getVantConfig, getWebpackConfig } from '../common';
import { siteDevBaseConfig } from './webpack.site.dev';
import { SITE_DIST_DIR } from '../common/constant';

const vantConfig = getVantConfig();
const outputDir = get(vantConfig, 'build.site.outputDir', SITE_DIST_DIR);
const publicPath = get(vantConfig, 'build.site.publicPath', '/');

export const sitePrdConfig = merge(
  siteDevBaseConfig,
  {
    mode: 'production',
    stats: 'none',
    output: {
      publicPath,
      path: outputDir,
      filename: '[name].[hash:8].js',
      chunkFilename: 'async_[name].[chunkhash:8].js'
    }
  },
  getWebpackConfig()
);

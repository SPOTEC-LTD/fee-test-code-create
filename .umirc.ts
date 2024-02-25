import { defineConfig } from 'umi';
import extraBabelPlugins from './config/extraBabelPlugins';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  extraBabelPlugins,
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
});

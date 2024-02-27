import { defineConfig } from 'umi';
import extraBabelPlugins from './config/extraBabelPlugins';

const SERVE_ENV = process.env.SERVE_ENV as ServeEnv;

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  extraBabelPlugins,
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  define: {
    SERVE_ENV,
  },
});

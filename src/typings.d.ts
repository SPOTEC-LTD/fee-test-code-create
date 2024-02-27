declare module '*.css';
declare module '*.less' {
  const classes: CSSModuleClasses;
  export default classes;
}
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';

declare const VERSION: string;
declare const BASE_URL: string | null;
declare const LOGIN_SITE_URL: string | null;
declare const SERVE_ENV: 'dev' | 'test1' | 'test2' | 'pre' | 'pro' | 'static';
declare const MAIN_DOMAIN: string;
declare const PREFIX_CLS: 'tmd';
declare const READ_CLIENT: string;
declare const SOCKET_HOST: string | null;
/** 是否启用sentry监控 0-否 1-是 */
declare const ENABLE_SENTRY: '0' | '1';
/** Sentry dsn */
declare const SENTRY_DSN: string;

type ReloadTableType = () => void;

type SelectListType = {
  value: number;
  label: string;
};

type GetTableAPIParamMap<T> = Omit<
  Required<{
    [K in keyof T]: K;
  }>,
  'field' | 'order' | 'pageNum' | 'pageSize'
>;

type GetAPIParamMap<T> = Required<{
  [K in keyof T]: K;
}>;

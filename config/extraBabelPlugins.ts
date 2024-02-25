const extraBabelPlugins: any[] = [
  [
    'babel-plugin-import',
    {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    },
    'antd',
  ],
  [
    'babel-plugin-import',
    {
      libraryName: 'assui',
      libraryDirectory: 'es',
      style: true,
    },
    'assui',
  ],
];

export default extraBabelPlugins;

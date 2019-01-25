module.exports = {
  presets: [
    'react-app',
  ],
  plugins: [
    // antD 按需加载
    [
      'import',
      {
        libraryName: 'antd',
        /**
         * true - 加载源文件（less）；
         * 'css' - 加载 css 文件；
         * 无 - 不加载样式
         */
        // style: true,
      },
    ],
  ],
};

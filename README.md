# React 管理系统

## 1. 介绍

基于 React 生态的管理系统。

## 2. 编撰

吴钦飞（wuqinfei@qq.com）

## 3. 目录结构

```text
react-ms/
  config/       # 构建相关：webpack
  public/       # 打包时会将其所有文件拷贝到 dist/
  scripts/      # npm scripts
  src/          # 源代码
  .babelrc.js
  .eslintrc.js
  .gitignore
  .stylelintrc.js
  package.json
  README.md
  yarn.lock

react-ms/src/
  common/       # 公共目录
    assets/       # 资源
      images/
      styles/
    components/   # 组件
  mock/         # 模拟的数据
  pages/        # 页面
  app.jsx
  index.jsx
```

## 4. 编程规范

对命名风格、代码风格进行约束。

### 4.1. 命名风格

目录名：

* kebab-case（短横线命名）命名规则，如 `nav-left`
* 使用单词的复数形式（组件目录除外）

文件名：

* 用 `.`（点）分隔文件类别，如

  ```text
  nav-left/
    nav-left.jsx
    nav-left.module.less

  weather/
    weather.api.js
    weather.jsx
    weather.module.less
    weather.service.js
  ```

### 4.2. 代码风格

#### 4.2.1. JavaScript/JSX

使用 Airbnb 代码风格。

安装：

```shell
# 查看依赖
$ npm info "eslint-config-airbnb@latest" peerDependencies

{ eslint: '^4.19.1 || ^5.3.0',
  'eslint-plugin-import': '^2.14.0',
  'eslint-plugin-jsx-a11y': '^6.1.1',
  'eslint-plugin-react': '^7.11.0' }

# 安装
$ yarn add --dev eslint@5.6.0 eslint-config-airbnb@latest
```

配置 `react-ms/.eslintrc.js`：

```javascript
module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "extends": "airbnb",

  // 使用 babel 支持的语法
  "parser": "babel-eslint",

  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "impliedStrict": true,
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true
    }
  },
  "plugins": [
    "react"
  ],
  "rules": {
    // 类方法里需要 this
    "class-methods-use-this": "warn",
    // 未使用的变量
    "no-unused-vars": "warn",
    // 优先使用解构
    "prefer-destructuring": "warn",
    // 不给参数重新赋值
    "no-param-reassign": "warn",
    "global-require": "warn",
    // 不要内嵌三元表达式
    "no-nested-ternary": "warn",

    // 不要动态设置 require
    "import/no-dynamic-require": "warn",

    "no-use-before-define": "warn",
  }
};
```

在 WebStorm 中启用：

```text
1. 打开 “偏好设置”
2. 搜索 “eslint”，进行相应设置
```

#### 4.2.2. css/less/scss

CSS 预处理器：LESS

BEM 约定：

```text
block_element__modifier

.navLeft_menu {}
.menu_item {}
.menu_item__active {}
.menu_item__disabled {}
```

使用标准 CSS 风格，安装：

```shell
# 插件
$ yarn add --dev stylelint stylelint-order
# 配置
$ yarn add --dev stylelint-config-standard stylelint-config-recess-order
```

配置 `react-ms/.stylelintrc.js`：

```javascript
module.exports = {
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-recess-order"
  ],
  "rules": {
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": [
          "mixin",
          "extend",
          "content"
        ]
      }
    ]
  }
};
```

在 WebStorm 中启用：

```text
1. 打开 “偏好设置”
2. 搜索 “stylelint”，进行相应设置
```

## 5. 第三方接口

### 5.1. 天气

官网：[https://www.seniverse.com](https://www.seniverse.com)

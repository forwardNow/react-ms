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

    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ]
  }
}
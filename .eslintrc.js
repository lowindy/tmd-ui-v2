module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  rules: {
    // 禁止空语句块
    'no-empty': 2,
    // 多行尾随逗号
    'comma-dangle': [2, 'always-multiline'],
    // 强制分号
    semi: ['error', 'always'],
    'arrow-parens': 0,
    // 参数后面不允许任何空格
    'space-before-function-paren': 0,
    // 强制 generator 函数中 * 号周围使用一致的空格
    'generator-star-spacing': 0,
    // 禁用console
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};

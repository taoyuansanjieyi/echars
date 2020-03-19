/**
 * 配置eslint有俩种方法:
 * 1. .eslintrc.js单独文件
 * 2. package.json中配置对象eslintConfig
 *
 */

// eslint官方文档配置教程             https://eslint.org/docs/user-guide/configuring
// 中文eslint配置介绍                 https://cloud.tencent.com/developer/doc/1078
// eslint-plugin-vue官方配置属性教程  https://eslint.vuejs.org/rules/html-self-closing.html

module.exports = {
  // 默认情况下，ESLint 会在所有父级目录里寻找配置文件，一直到根目录。ESLint 一旦发现配置文件中有 "root": true，它就会停止在父级目录中寻找配置文件。如果想要所有目录都遵循一个特定的约定时设置为true
  root: true,
  // 当访问未定义的变量时，no-undef 规则将发出警告。如果你想在一个文件里使用全局变量，推荐你定义这些全局变量，这样 ESLint 就不会发出警告了。你可以使用注释或在配置文件中定义全局变量。
  globals: {
    window: true,
    document: true,
    $: true
  },
  // 设置vue插件
  plugins: [
    'eslint-plugin-vue'
  ],
  // 设置解析器选项（必须设置这个属性）
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  // 启用的环境
  env: {
    es6: true,
    node: true,
    browser: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/recommended',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],

  // 启用的规则及各自的错误级别
  // "off" or 0 - 关闭
  // "warn" or 1 - 警告
  // "error" or 2 - 报错
  rules: {
    // es6生成器 * 显示位置规则，设置关闭
    'generator-star-spacing': 'off',
    // 此规则强制执行一致的缩进样式。默认样式是4 spaces。 设置关闭
    'indent': 'off',
    // 配置缩进 报错方式warn/error 定义一个tab的空格数 定义顶级语句与<script>标签的缩进倍数
    'vue/script-indent': ['error', 2, {
      'baseIndent': 1
    }],
    // 开发模式下允许打印和断点 产品模式下报错
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 使用控制字符模式匹配(使用正则时,应该设置该属性关闭)
    'no-control-regex': 'off',
    // 配置html标签不自闭和以及vue组件不自闭和 (never从不自闭，always总是自闭)
    // 参数normal html的常规标签
    // 参数void html众所周知的不自闭元素br input
    // component vue自定义的组件
    'vue/html-self-closing': ['error', {
      'html': {
        normal: 'never',
        void: 'always',
        component: 'never'
      }
    }],
    // html结束标记单占一行 (never 从不单占一行， always 总是单占一行)
    // 参数 singleline 一个标记占单行时
    // 参数 multiline 一个标记占多行时
    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never',
      'multiline': 'never'
    }],
    // 页面方法顺序
    'vue/order-in-components': ['error', {
      'order': [
        'el',
        'name',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'fetch',
        'asyncData',
        'data',
        'computed',
        'watch',
        'LIFECYCLE_HOOKS',
        'methods',
        'head',
        ['template', 'render'],
        'renderError'
      ]
    }]
  }
}

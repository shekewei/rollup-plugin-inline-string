module.exports = {
  singleQuote: true, // 使用单引号
  printWidth: 80, // 超过最大值换行
  htmlWhitespaceSensitivity: 'ignore',
  semi: false, // 结尾不用分号
  tabWidth: 2,
  trailingComma: 'none', // 函数最后不需要逗号
  arrowParens: 'avoid', // 箭头函数参数只有一个时，不需要括号
  bracketSpacing: true, // 对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
  jsxBracketSameLine: false, // 在jsx中把'>' 是否单独放一行
  jsxSingleQuote: true, // 在jsx中使用单引号代替双引号
  proseWrap: 'preserve', //代码超出是否要换行 preserve保留
  endOfLine: 'auto' //不让prettier检测文件每行结束的格式
}

# rollup-plugin-inline-string

## :rocket: Features

这是一个rollup插件，就像webpack的[raw-loader](https://v4.webpack.js.org/loaders/raw-loader/)

## Install

```bash
npm i rollup-plugin-inline-string -D
```

## Usage

修改您的**rollup.config.js**文件

**rollup.config.js**

```javascript
import inline from 'rollup-plugin-inline-string'

export default {
  input: ...,
  output: ...,
  plugins: [inline(
    {
        extensions: ['.css'], //以css文件为例
        minify: true //是否压缩
    }
  )],
}
```

**任意的css文件**

```css
.se-button {
  display: flex;
  align-items: center;
}
.se-button .text {
  color: red;
}
...
```

**在你的javascript文件或typescript文件中**

```javascript
import styles from './styles.css'
...
const sty = styles
...
```

**最终输出的javascript文件会有类似如下内容**

```javascript
...
const styles = ".se-button{display:flex;align-items:center;}.se-button .text{color:red;}"
...
```

**假如你只想处理某一个css文件，可以这样配置**

**rollup.config.js**

```javascript
import inline from 'rollup-plugin-inline-string'

export default {
  input: ...,
  output: ...,
  plugins: [inline(
    {
        extensions: ['.css'], //以css文件为例
        suffix: '?inline',//后缀，可以自定义
        minify: true //是否压缩
    }
  )],
}
```

```javascript
import styles from './styles.css?inline'
...
const sty = styles
...
```

**typescript文件中找不到模块的问题**

## 在声明文件中加入一下内容

```typescript
declare module '*?inline' {
  const str: string
  export = str
}
```

import pathf from 'path'

type TOptions = {
  extensions: string[]
  minify?: boolean
  suffix?: string
}

const minifyFn = (source: string) => {
  const $reg1 = new RegExp(/[\f\n\r\t\v]/, 'g')
  const $reg2 = new RegExp(/(?<={)\s+|\s+(?={)|(?<=[:;])\s+/, 'g')
  const first = source.replace($reg1, '')
  const second = first.replace($reg2, '')
  return second
}

function inline(options: TOptions) {
  const { extensions = [], minify = false, suffix = '' } = options
  const paths = new Set()
  return {
    name: 'rollup-plugin-inline-string',
    resolveId: (source: any, importer: any) => {
      let path: any = source
      if (suffix && path.endsWith(suffix)) {
        path = path.slice(0, -suffix.length)
      }
      if (extensions.find((ext: string) => path.endsWith(ext))) {
        const p = pathf.resolve(importer, '../', path)
        paths.add(p)
        return p
      }
      return null
    },
    transform: (codeContent: any, id: any) => {
      if (!paths.has(id)) {
        return null
      }
      const result = (minify && minifyFn(codeContent)) || codeContent
      const code = `export default ${JSON.stringify(result)};`
      const map = { mappings: '' }
      return {
        code,
        map
      }
    }
  }
}

export default inline

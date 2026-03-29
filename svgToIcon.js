import svgtofont from 'svgtofont'
import path from 'path'

const generateFont = async () => {
  try {
    console.log('🚀 开始生成字体文件...')
    
    await svgtofont({
      src: path.resolve(process.cwd(), './src/assets/icons'),
      dist: path.resolve(process.cwd(), './dist'),
      fontName: 'tyi',
      css: true,
      outSVGVue: true,
      useNameAsUnicode: false,
      clssaNamePrefix: 'tyi-',
      website: {
        title: 'ToyarIcon',
        meta: {
          description: 'Converts SVG fonts to TTF/EOT/WOFF/WOFF2/SVG format.',
          keywords: 'svgtofont,TTF,EOT,WOFF,WOFF2,SVG'
        },
        description: '',
        links: [
          {
            title: 'GitHub',
            url: 'https://github.com/toyarIcon'
          },
          {
            title: 'Font Class',
            url: 'index.html'
          },
          {
            title: 'Unicode',
            url: 'unicode.html'
          }
        ],
        footerInfo: 'Licensed under MIT. (Yes it\'s free and <a href="https://github.com/toyarIcon">open-sourced</a>'
      }
    })
    
    console.log('✅ 字体文件生成完成！')
  } catch (error) {
    console.error('❌ 生成字体文件时出错:', error)
    process.exit(1)
  }
}

generateFont()

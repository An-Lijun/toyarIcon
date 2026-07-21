import fs from 'fs/promises'
import path from 'path'

function toPascalCase(str) {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
}

function splitArrayIntoChunks(arr, chunkSize) {
  const result = []
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize))
  }
  return result
}

const genTemp = async name => {
  const fileName = toPascalCase(name)
  const svgNm = name.slice(name.indexOf('-') + 1)

  const svgContent = await fs.readFile(
    path.resolve(process.cwd(), `./src/assets/icons/${name}.svg`),
    'utf-8'
  )

  const temp = `<template>
  <i
    :class="['toyar', nm.b(), icon]"
    :style="{
      width: props.size > 0 ? size + 'px' : 'unset',
      color: color?color :'',
    }"
  >
    ${svgContent}
  </i>
</template>
<script  setup>
  import {iconProps,nm} from "../utils/getProps"
  defineOptions({
    name:"Tyi${fileName}"
  })
  const props = defineProps(iconProps)
</script>
`
  return {
    temp,
    fileName: `Tyi${fileName}`
  }
}

const ensureDir = async dirPath => {
  try {
    await fs.access(dirPath)
  } catch {
    await fs.mkdir(dirPath, { recursive: true })
  }
}

const generateIconComponents = async () => {
  try {
    console.log('🚀 开始生成图标组件...')

    const iconsDir = path.resolve(process.cwd(), './src/assets/icons')
    const packageSrcDir = path.resolve(process.cwd(), './src/package/src')
    const distDir = path.resolve(process.cwd(), './dist')

    await ensureDir(packageSrcDir)
    await ensureDir(distDir)

    const files = await fs.readdir(iconsDir)
    const svgFiles = files.filter(file => file.endsWith('.svg'))

    console.log(`📁 找到 ${svgFiles.length} 个 SVG 文件`)

    const fileNms = []
    const dirList = []

    for (const file of svgFiles) {
      const name = file.replace('.svg', '')
      const { temp, fileName } = await genTemp(name)
      fileNms.push(fileName)
      dirList.push(fileName)

      await fs.writeFile(path.resolve(packageSrcDir, `${fileName}.vue`), temp)
    }

    console.log('✅ 生成 Vue 组件完成')

    const indexContent = `import '../assets/index.css'
${dirList.map(item => `import ${item} from './src/${item}.vue'`).join('\n')}
export {
  ${dirList.join(',\n')}
}`

    await fs.writeFile(path.resolve(process.cwd(), './src/package/index.js'), indexContent)
    console.log('✅ 生成 index.js 完成')

    const splitList = splitArrayIntoChunks(fileNms, 5)

    let fileListStr = ''
    splitList.forEach((item, index) => {
      fileListStr += `export const iconList${index + 1} = ${JSON.stringify(item)};`
      if (index !== splitList.length - 1) {
        fileListStr += '\n'
      }
    })
    fileListStr += '\n'
    fileListStr += `export const maxPage = ${fileNms.length}`

    await fs.writeFile(path.resolve(distDir, 'iconList.js'), fileListStr)
    console.log('✅ 生成 iconList.js 完成')

    const dtsContent = `import type { DefineComponent, ComponentOptionsMixin, PropType } from 'vue';

export interface TyiIconProps {
  icon?: string;
  size?: number;
  color?: string;
}

export type TyiIconComponent = DefineComponent<
  {
    icon?: { type: PropType<string>; default: string };
    size?: { type: PropType<number>; default: number };
    color?: { type: PropType<string> };
  },
  unknown,
  unknown,
  unknown,
  unknown,
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {},
  string,
  {},
  {},
  {}
>;

${fileNms.map(name => `export const ${name}: TyiIconComponent;`).join('\n')}
`
    await fs.writeFile(path.resolve(distDir, 'index.d.ts'), dtsContent)
    console.log('✅ 生成 index.d.ts 完成')

    const asyncModuleContent = `export default function (compName) {
  return import('./index.js').then((module) => module[compName]);
}`

    await fs.writeFile(path.resolve(distDir, 'getAsyncModule.js'), asyncModuleContent)
    console.log('✅ 生成 getAsyncModule.js 完成')

    console.log('🎉 所有图标组件生成完成！')
  } catch (error) {
    console.error('❌ 生成图标组件时出错:', error)
    process.exit(1)
  }
}

generateIconComponents()

// genAsyncIcon.js
import fs from 'fs'
import path from 'path'

function toPascalCase(str) {
  const words = str.split('-');
  return words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join('');
}

function splitArrayIntoChunks(arr, chunkSize) {
  const result = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
  }
  return result;
}

const genTemp = (name) => {
  const fileName = toPascalCase(name)
  const svgNm = name.slice(name.indexOf('-') + 1)
  
const temp = `<template>
  <i
    :class="['toyar', nm.b(), icon]"
    :style="{
      width: props.size > 0 ? size + 'px' : 'unset',
      color: color?color :'',
    }"
  >
    ${fs.readFileSync(path.resolve(`./src/assets/icons/${name}.svg`), 'utf-8')}
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
    fileName : `Tyi${fileName}`
  }
}

const fileNms=[]
fs.readdir('./src/assets/icons', (err, files) => {
  if (err) {
      console.error('读取文件夹时出现错误:', err);
      return;
  }
  console.log('文件夹中的文件名:', files);

    const dirList = files.reduce((acc, item) => {
      const name = item.replace('.svg', '')
      
      const { temp, fileName } = genTemp(name)
      fileNms.push(fileName)
      acc.push(fileName)
      fs.writeFileSync(path.resolve(`./src/package/src/${fileName}.vue`), temp)
      return acc
    }, [])
    
    
    
let str = `import '../assets/index.css'
    ${dirList.map(item => `import ${item} from './src/${item}.vue'`).join('\n')}
    export {
      ${dirList.join(',\n')}
    }`
    



    fs.writeFileSync(path.resolve(`./src/package/index.js`), str)

    const splitList = splitArrayIntoChunks(fileNms,5)

    let fileListStr =""

    splitList.forEach((item,index)=>{
      fileListStr+= `export const iconList${index+1} = ${JSON.stringify(item)}`
      if(index !== splitList.length - 1){
        fileListStr+="\n"}
    })

    fileListStr+=`export const maxPage = ${fileNms.length}`
    fs.writeFileSync(path.resolve(`./dist/iconList.js`), `${fileListStr}`)

    fs.writeFileSync(path.resolve(`./dist/getAsyncModule.js`), `export default function (compName) {
        defineAsyncComponent(() => import('./index.js').then((module) => module[compName]));
    }`)

});









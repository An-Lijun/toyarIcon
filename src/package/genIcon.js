// genAsyncIcon.js
import fs from 'fs'
import path from 'path'
import all from './iconList.js'

function toPascalCase(str) {
  const words = str.split('-');
  return words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join('');
}

const genTemp = (name) => {
  const fileName = toPascalCase(name)
  const svgNm = name.slice(name.indexOf('-') + 1)
  const temp = `
      <template>
        <i
          :class="['toyar', nm.b(), icon]"
          :style="{
            fontSize: props.size > 0 ? size + 'px' : 'unset',
            color: color?color :'var(--toyar-gray-10)',
            width: props.size > 0? size + 'px' : 'unset',
          }"
        >
          ${fs.readFileSync(path.resolve(`./assets/icons/${svgNm}.svg`), 'utf-8')}
        </i>
      </template>
      <script  setup>
      import useNmSpace from "../../../hooks/useBem"
      defineOptions({
        name:"${fileName}"
      })
      const props = defineProps({
          icon: {
            type: String,
            default: ""
          },
          size: {
            type:Number,
            default: 0
          },
          color:{
            type:String
          }
      })
      const nm =useNmSpace('icon')
      </script>
      <style lang="scss" scoped>
      .ty-icon {
        font-size: 1em;
        color: var(--toyar-gray-10);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: bottom;
      }
      </style>`
  return {
    temp,
    fileName
  }
}

const dirList = all.reduce((acc, item) => {
  const name = item.icon
  const { temp, fileName } = genTemp(name)
  acc.push(fileName)
  fs.writeFileSync(path.resolve(`./components/icons/src/${fileName}.vue`), temp)
  return acc
}, [])


let str = `
${dirList.map(item => `import ${item} from './src/${item}.vue'`).join('\n')}
export {
${dirList.join(',\n')}
}
`

fs.writeFileSync(path.resolve(`./components/icons/index.ts`), str)





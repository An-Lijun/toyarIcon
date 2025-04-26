
      <template>
        <i
          :class="['toyar', nm.b(), icon]"
          :style="{
            width: props.size > 0 ? size + 'px' : 'unset',
            color: color?color :'',
            
          }"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4 7V17H18V7H4ZM3 5H19C19.5523 5 20 5.44772 20 6V18C20 18.5523 19.5523 19 19 19H3C2.44772 19 2 18.5523 2 18V6C2 5.44772 2.44772 5 3 5ZM5 8H9V16H5V8ZM21 9H23V15H21V9Z"/></svg>
        </i>
      </template>
      <script  setup>
      import useNmSpace from "../utils/useBem"
      defineOptions({
        name:"TyBatteryLowLine"
      })
      const props = defineProps({
          icon: {
            type: String,
            default: ""
          },
          size: {
            type:Number,
            default:12
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
        
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: bottom;
      }
      </style>
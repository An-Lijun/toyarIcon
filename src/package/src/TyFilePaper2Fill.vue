
      <template>
        <i
          :class="['toyar', nm.b(), icon]"
          :style="{
            width: props.size > 0 ? size + 'px' : 'unset',
            color: color?color :'',
            
          }"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20 2C21.6569 2 23 3.34315 23 5V7H21V19C21 20.6569 19.6569 22 18 22H4C2.34315 22 1 20.6569 1 19V17H17V19C17 19.5128 17.386 19.9355 17.8834 19.9933L18 20C18.5128 20 18.9355 19.614 18.9933 19.1166L19 19V15H3V5C3 3.34315 4.34315 2 6 2H20Z"/></svg>
        </i>
      </template>
      <script  setup>
      import useNmSpace from "../utils/useBem"
      defineOptions({
        name:"TyFilePaper2Fill"
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
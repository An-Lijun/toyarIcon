
      <template>
        <i
          :class="['toyar', nm.b(), icon]"
          :style="{
            width: props.size > 0 ? size + 'px' : 'unset',
            color: color?color :'',
            
          }"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V10H18.874C18.4299 8.27477 16.8638 7 15 7C13.1362 7 11.5701 8.27477 11.126 10H2V4C2 3.44772 2.44772 3 3 3ZM2 12V20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20V12H18.874C18.4299 13.7252 16.8638 15 15 15C13.1362 15 11.5701 13.7252 11.126 12H2ZM15 9C13.8954 9 13 9.89543 13 11C13 12.1046 13.8954 13 15 13C16.1046 13 17 12.1046 17 11C17 9.89543 16.1046 9 15 9ZM6 15H8V17H6V15Z"/></svg>
        </i>
      </template>
      <script  setup>
      import useNmSpace from "../utils/useBem"
      defineOptions({
        name:"TyProjectorFill"
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

      <template>
        <i
          :class="['toyar', nm.b(), icon]"
          :style="{
            width: props.size > 0 ? size + 'px' : 'unset',
            color: color?color :'',
            
          }"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.0049 8V5H4.00488V8H20.0049ZM20.0049 10H4.00488V19H20.0049V10ZM3.00488 3H21.0049C21.5572 3 22.0049 3.44772 22.0049 4V20C22.0049 20.5523 21.5572 21 21.0049 21H3.00488C2.4526 21 2.00488 20.5523 2.00488 20V4C2.00488 3.44772 2.4526 3 3.00488 3ZM11.0049 14H17.0049V16H6.50488L11.0049 11.5V14Z"/></svg>
        </i>
      </template>
      <script  setup>
      import useNmSpace from "../utils/useBem"
      defineOptions({
        name:"TyRefundLine"
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
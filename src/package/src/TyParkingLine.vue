
      <template>
        <i
          :class="['toyar', nm.b(), icon]"
          :style="{
            width: props.size > 0 ? size + 'px' : 'unset',
            color: color?color :'',
            
          }"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M6 3H13C16.3137 3 19 5.68629 19 9C19 12.3137 16.3137 15 13 15H8V21H6V3ZM8 5V13H13C15.2091 13 17 11.2091 17 9C17 6.79086 15.2091 5 13 5H8Z"/></svg>
        </i>
      </template>
      <script  setup>
      import useNmSpace from "../utils/useBem"
      defineOptions({
        name:"TyParkingLine"
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

      <template>
        <i
          :class="['toyar', nm.b(), icon]"
          :style="{
            fontSize: props.size > 0 ? size + 'px' : 'unset',
            color: color?color :'',
            
          }"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 1L15 6H13V13.381L16 11.882L15.999 11H15V7H19V11H17.999L18 13.118L13 15.618L13.0009 17.171C14.1656 17.5831 15 18.6941 15 20C15 21.6569 13.6569 23 12 23C10.3431 23 9 21.6569 9 20C9 18.813 9.68934 17.7871 10.6895 17.3006L6 14L5.99892 11.7318C5.40172 11.3858 5 10.7398 5 10C5 8.89543 5.89543 8 7 8C8.10457 8 9 8.89543 9 10C9 10.7403 8.59783 11.3866 8.00007 11.7324L8 13L11 15.086V6H9L12 1Z"/></svg>
        </i>
      </template>
      <script  setup>
      import useNmSpace from "../utils/useBem"
      defineOptions({
        name:"TyUsbFill"
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
        color: ;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: bottom;
      }
      </style>
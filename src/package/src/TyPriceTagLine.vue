
      <template>
        <i
          :class="['toyar', nm.b(), icon]"
          :style="{
            width: props.size > 0 ? size + 'px' : 'unset',
            color: color?color :'',
            
          }"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M3.00488 6.99972L11.4502 1.36952C11.7861 1.14559 12.2237 1.14559 12.5596 1.36952L21.0049 6.99972V20.9997C21.0049 21.552 20.5572 21.9997 20.0049 21.9997H4.00488C3.4526 21.9997 3.00488 21.552 3.00488 20.9997V6.99972ZM5.00488 8.07009V19.9997H19.0049V8.07009L12.0049 3.40342L5.00488 8.07009ZM12.0049 10.9997C10.9003 10.9997 10.0049 10.1043 10.0049 8.99972C10.0049 7.89515 10.9003 6.99972 12.0049 6.99972C13.1095 6.99972 14.0049 7.89515 14.0049 8.99972C14.0049 10.1043 13.1095 10.9997 12.0049 10.9997Z"/></svg>
        </i>
      </template>
      <script  setup>
      import useNmSpace from "../utils/useBem"
      defineOptions({
        name:"TyPriceTagLine"
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
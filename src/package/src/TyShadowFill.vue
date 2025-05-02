
      <template>
        <i
          :class="['toyar', nm.b(), icon]"
          :style="{
            width: props.size > 0 ? size + 'px' : 'unset',
            color: color?color :'',
          }"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M2 3C2 2.44772 2.44772 2 3 2H17C17.5523 2 18 2.44772 18 3V6H21C21.5523 6 22 6.44772 22 7V21C22 21.5523 21.5523 22 21 22H7C6.44772 22 6 21.5523 6 21V18H3C2.44772 18 2 17.5523 2 17V3ZM8 18V20H11.4393L9.43934 18H8ZM11.5607 18L13.5607 20H16.4393L14.4393 18H11.5607ZM20 20V18.5607L18 16.5607V17C18 17.5523 17.5523 18 17 18H16.5607L18.5607 20H20ZM20 13.5607L18 11.5607V14.4393L20 16.4393V13.5607ZM20 11.4393V8H18V9.43934L20 11.4393Z"/></svg>
        </i>
      </template>
      <script  setup>
      import useNmSpace from "../utils/useBem"
      defineOptions({
        name:"TyShadowFill"
      })
      const props = defineProps({
          icon: {
            type: String,
            default: ""
          },
          size: {
            type:Number,
            default: 12
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
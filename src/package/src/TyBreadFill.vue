
      <template>
        <i
          :class="['toyar', nm.b(), icon]"
          :style="{
            width: props.size > 0 ? size + 'px' : 'unset',
            color: color?color :'',
            
          }"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M1 7C1 4.79086 2.79086 3 5 3H7C4.79086 3 3 4.79086 3 7C3 8.48168 3.8052 9.77343 5 10.4646V19C5 20.6569 6.34315 22 8 22H6C4.34315 22 3 20.6569 3 19V10.4646C1.8052 9.77343 1 8.48168 1 7ZM8 22V20C7.44772 20 7 19.5523 7 19V9.12212L6.33325 8.88645C5.5551 8.61142 5 7.86925 5 7C5 5.89543 5.89543 5 7 5V3H19C21.2091 3 23 4.79086 23 7C23 8.48168 22.1948 9.77343 21 10.4646V19C21 20.6569 19.6569 22 18 22H8Z"/></svg>
        </i>
      </template>
      <script  setup>
      import useNmSpace from "../utils/useBem"
      defineOptions({
        name:"TyBreadFill"
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
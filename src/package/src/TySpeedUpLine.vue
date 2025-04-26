
      <template>
        <i
          :class="['toyar', nm.b(), icon]"
          :style="{
            fontSize: props.size > 0 ? size + 'px' : 'unset',
            color: color?color :'',
            
          }"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20 13C20 15.2091 19.1046 17.2091 17.6569 18.6569L19.0711 20.0711C20.8807 18.2614 22 15.7614 22 13 22 7.47715 17.5228 3 12 3 6.47715 3 2 7.47715 2 13 2 15.7614 3.11929 18.2614 4.92893 20.0711L6.34315 18.6569C4.89543 17.2091 4 15.2091 4 13 4 8.58172 7.58172 5 12 5 16.4183 5 20 8.58172 20 13ZM15.293 8.29297 10.793 12.793 12.2072 14.2072 16.7072 9.70718 15.293 8.29297Z"/></svg>
        </i>
      </template>
      <script  setup>
      import useNmSpace from "../utils/useBem"
      defineOptions({
        name:"TySpeedUpLine"
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
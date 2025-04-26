
      <template>
        <i
          :class="['toyar', nm.b(), icon]"
          :style="{
            width: props.size > 0 ? size + 'px' : 'unset',
            color: color?color :'',
            
          }"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M16.248 5.43872L5.74033 11.5682C5.50181 11.7073 5.42124 12.0135 5.56038 12.252C5.60384 12.3265 5.66583 12.3885 5.74033 12.432L16.248 18.5615C16.4865 18.7006 16.7927 18.62 16.9318 18.3815C16.9764 18.305 17 18.2181 17 18.1296V5.87061C17 5.59446 16.7761 5.37061 16.5 5.37061C16.4114 5.37061 16.3245 5.39411 16.248 5.43872Z"/></svg>
        </i>
      </template>
      <script  setup>
      import useNmSpace from "../utils/useBem"
      defineOptions({
        name:"TyPlayReverseMiniFill"
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
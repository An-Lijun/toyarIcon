
      <template>
        <i
          :class="['toyar', nm.b(), icon]"
          :style="{
            fontSize: props.size > 0 ? size + 'px' : 'unset',
            color: color?color :'',
            
          }"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M3.08378 15.25C1.42044 15.25 0.483971 13.3378 1.5038 12.0237L10.2099 0.806317C10.794 0.053716 11.9999 0.466765 11.9999 1.41944V8.74999H20.9159C22.5793 8.74999 23.5157 10.6622 22.4959 11.9762L13.7898 23.1937C13.2057 23.9463 11.9999 23.5332 11.9999 22.5805V15.25H3.08378Z"/></svg>
        </i>
      </template>
      <script  setup>
      import useNmSpace from "../utils/useBem"
      defineOptions({
        name:"TySupabaseFill"
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
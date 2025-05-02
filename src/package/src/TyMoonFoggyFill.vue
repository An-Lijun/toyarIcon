
      <template>
        <i
          :class="['toyar', nm.b(), icon]"
          :style="{
            width: props.size > 0 ? size + 'px' : 'unset',
            color: color?color :'',
          }"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M16 20.3345V18H14V14H3.33238C3.11567 13.2034 3 12.3652 3 11.5C3 6.93954 6.21346 3.1296 10.4996 2.211C10.1765 3.07941 10 4.01909 10 5.00001C10 9.41829 13.5817 13 18 13C19.4531 13 20.8157 12.6126 21.9902 11.9354C21.8178 15.7576 19.3867 18.9916 16 20.3345ZM7 20H14V22H7V20ZM2 16H12V18H2V16Z"/></svg>
        </i>
      </template>
      <script  setup>
      import useNmSpace from "../utils/useBem"
      defineOptions({
        name:"TyMoonFoggyFill"
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
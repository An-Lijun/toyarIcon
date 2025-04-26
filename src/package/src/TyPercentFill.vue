
      <template>
        <i
          :class="['toyar', nm.b(), icon]"
          :style="{
            width: props.size > 0 ? size + 'px' : 'unset',
            color: color?color :'',
            
          }"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.5049 21.0027C15.5719 21.0027 14.0049 19.4357 14.0049 17.5027C14.0049 15.5697 15.5719 14.0027 17.5049 14.0027C19.4379 14.0027 21.0049 15.5697 21.0049 17.5027C21.0049 19.4357 19.4379 21.0027 17.5049 21.0027ZM6.50488 10.0027C4.57189 10.0027 3.00488 8.43574 3.00488 6.50275C3.00488 4.56975 4.57189 3.00275 6.50488 3.00275C8.43788 3.00275 10.0049 4.56975 10.0049 6.50275C10.0049 8.43574 8.43788 10.0027 6.50488 10.0027ZM19.076 3.51747L20.4902 4.93168L4.93382 20.488L3.5196 19.0738L19.076 3.51747Z"/></svg>
        </i>
      </template>
      <script  setup>
      import useNmSpace from "../utils/useBem"
      defineOptions({
        name:"TyPercentFill"
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
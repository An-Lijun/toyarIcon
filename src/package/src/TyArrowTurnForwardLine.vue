
      <template>
        <i
          :class="['toyar', nm.b(), icon]"
          :style="{
            width: props.size > 0 ? size + 'px' : 'unset',
            color: color?color :'',
          }"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.0004 5.82843V13C17.0004 16.3137 14.3141 19 11.0004 19C7.68672 19 5.00043 16.3137 5.00043 13V4H3.00043V13C3.00043 17.4183 6.58215 21 11.0004 21C15.4187 21 19.0004 17.4183 19.0004 13V5.82843L21.536 8.36396L22.9502 6.94975L18.0004 2L13.0507 6.94975L14.4649 8.36396L17.0004 5.82843Z"/></svg>
        </i>
      </template>
      <script  setup>
      import useNmSpace from "../../../hooks/useBem"
      defineOptions({
        name:"TyArrowTurnForwardLine"
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
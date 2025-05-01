
      <template>
        <i
          :class="['toyar', nm.b(), icon]"
          :style="{
            width: props.size > 0 ? size + 'px' : 'unset',
            color: color?color :'',
          }"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M2 18L2 6H4L4 18H2ZM9.44975 7.05025L4.5 12L9.44727 16.9473L10.8615 15.5331L8.32843 13H15.6708L13.1358 15.535L14.55 16.9492L19.5 11.9995L14.5503 7.04976L13.136 8.46398L15.6721 11H8.32843L10.864 8.46447L9.44975 7.05025ZM20 6H22V18H20V6Z"/></svg>
        </i>
      </template>
      <script  setup>
      import useNmSpace from "../../../hooks/useBem"
      defineOptions({
        name:"TyExpandWidthLine"
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
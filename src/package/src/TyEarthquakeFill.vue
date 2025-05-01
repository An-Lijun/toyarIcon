
      <template>
        <i
          :class="['toyar', nm.b(), icon]"
          :style="{
            width: props.size > 0 ? size + 'px' : 'unset',
            color: color?color :'',
          }"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M11.3273 1.6115C11.677 1.29365 12.1956 1.26716 12.5734 1.53204L12.6727 1.6115L23 11H20V20C20 20.5128 19.614 20.9355 19.1166 20.9933L19 21H12.5L15 17L11.5 14L15.5 11L13 8.99998L13.5 5.99998L10.5 8.99998L13 11L8 14L11.75 17.5L8.5 21H5C4.48716 21 4.06449 20.6139 4.00673 20.1166L4 20V11H1L11.3273 1.6115Z"/></svg>
        </i>
      </template>
      <script  setup>
      import useNmSpace from "../../../hooks/useBem"
      defineOptions({
        name:"TyEarthquakeFill"
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
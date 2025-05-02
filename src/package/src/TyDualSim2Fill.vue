
      <template>
        <i
          :class="['toyar', nm.b(), icon]"
          :style="{
            width: props.size > 0 ? size + 'px' : 'unset',
            color: color?color :'',
          }"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15 2L19.7071 6.70711C19.8946 6.89464 20 7.149 20 7.41421V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2H15ZM12 7.5C10.4023 7.5 9.09634 8.74892 9.00509 10.3237L9 10.5H11C11 9.94772 11.4477 9.5 12 9.5C12.5523 9.5 13 9.94772 13 10.5C13 10.7528 12.9062 10.9836 12.7514 11.1598L12.6691 11.2431L8.99926 14.547L9 16H15V14H12.5953L14.0074 12.7294L14.0013 12.72L14.009 12.728C14.6175 12.179 15 11.3841 15 10.5C15 8.84315 13.6569 7.5 12 7.5Z"/></svg>
        </i>
      </template>
      <script  setup>
      import useNmSpace from "../utils/useBem"
      defineOptions({
        name:"TyDualSim2Fill"
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
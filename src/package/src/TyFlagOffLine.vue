
      <template>
        <i
          :class="['toyar', nm.b(), icon]"
          :style="{
            width: props.size > 0 ? size + 'px' : 'unset',
            color: color?color :'',
          }"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M16.5859 18L21.1925 22.6066L22.6068 21.1924L2.80777 1.39343L1.39355 2.80765L3.00008 4.41417V22H5.00008V16H12.0001L12.7237 17.4472C12.8931 17.786 13.2393 18 13.6181 18H16.5859ZM14.5859 16H14.2361L13.8864 15.3005L14.5859 16ZM12.5859 14H5.00008V6.41417L12.5859 14ZM21.0001 5.99995V16.7576L19.0001 14.7576V6.99995H12.764L11.764 4.99995H9.24241L7.24241 2.99995H12.382C12.7608 2.99995 13.1071 3.21396 13.2765 3.55274L14.0001 4.99995H20.0001C20.5524 4.99995 21.0001 5.44767 21.0001 5.99995Z"/></svg>
        </i>
      </template>
      <script  setup>
      import useNmSpace from "../../../hooks/useBem"
      defineOptions({
        name:"TyFlagOffLine"
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
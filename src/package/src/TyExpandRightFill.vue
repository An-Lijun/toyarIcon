<template>
  <i
    :class="['toyar', nm.b(), icon]"
    :style="{
      width: props.size > 0 ? size + 'px' : 'unset',
      color: color?color :'',
    }"
  >
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M13.9998 4.99988L21.0001 11.9999L13.9998 18.9999V13.0001H7.9998L7.99978 11.0001H13.9998V4.99988ZM3.99985 18.9999L3.99985 4.99988H5.99985V18.9999H3.99985Z"/></svg>
  </i>
</template>
<script  setup>
  import {iconProps,nm} from "../utils/getProps"
  defineOptions({
    name:"TyExpandRightFill"
  })
  const props = defineProps(iconProps)
</script>

<template>
  <i
    :class="['toyar', nm.b(), icon]"
    :style="{
      width: props.size > 0 ? size + 'px' : 'unset',
      color: color?color :'',
    }"
  >
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M2.00488 19H22.0049V21H2.00488V19ZM2.00488 5L7.00488 8L12.0049 2L17.0049 8L22.0049 5V17H2.00488V5Z"/></svg>
  </i>
</template>
<script  setup>
  import {iconProps,nm} from "../utils/getProps"
  defineOptions({
    name:"TyiVipCrownFill"
  })
  const props = defineProps(iconProps)
</script>

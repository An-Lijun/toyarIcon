<template>
  <i
    :class="['toyar', nm.b(), icon]"
    :style="{
      width: props.size > 0 ? size + 'px' : 'unset',
      color: color?color :'',
    }"
  >
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M3 4H21V6H3V4ZM3 11H15V13H3V11ZM3 18H21V20H3V18Z"/></svg>
  </i>
</template>
<script  setup>
  import {iconProps,nm} from "../utils/getProps"
  defineOptions({
    name:"TyiMenu2Line"
  })
  const props = defineProps(iconProps)
</script>

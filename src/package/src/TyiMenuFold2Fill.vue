<template>
  <i
    :class="['toyar', nm.b(), icon]"
    :style="{
      width: props.size > 0 ? size + 'px' : 'unset',
      color: color?color :'',
    }"
  >
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4 3.5L9 8.49955L4 13.5V3.5ZM21 19.9995V17.9995H3V19.9995H21ZM21 12.9995V10.9995H12V12.9995H21ZM21 5.99951V3.99951H12V5.99951H21Z"/></svg>
  </i>
</template>
<script  setup>
  import {iconProps,nm} from "../utils/getProps"
  defineOptions({
    name:"TyiMenuFold2Fill"
  })
  const props = defineProps(iconProps)
</script>

<template>
  <i
    :class="['toyar', nm.b(), icon]"
    :style="{
      width: props.size > 0 ? size + 'px' : 'unset',
      color: color?color :'',
    }"
  >
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19.7783 5.63577L18.3643 4.22156L8.75734 13.8284L4.92896 10L4.92896 19.0711L14 19.0711L10.1716 15.2426L19.7783 5.63577Z"/></svg>
  </i>
</template>
<script  setup>
  import {iconProps,nm} from "../utils/getProps"
  defineOptions({
    name:"TyArrowLeftDownLongFill"
  })
  const props = defineProps(iconProps)
</script>

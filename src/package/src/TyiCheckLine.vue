<template>
  <i
    :class="['toyar', nm.b(), icon]"
    :style="{
      width: props.size > 0 ? size + 'px' : 'unset',
      color: color?color :'',
    }"
  >
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"/></svg>
  </i>
</template>
<script  setup>
  import {iconProps,nm} from "../utils/getProps"
  defineOptions({
    name:"TyiCheckLine"
  })
  const props = defineProps(iconProps)
</script>

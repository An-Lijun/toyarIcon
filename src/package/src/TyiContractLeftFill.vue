<template>
  <i
    :class="['toyar', nm.b(), icon]"
    :style="{
      width: props.size > 0 ? size + 'px' : 'unset',
      color: color?color :'',
    }"
  >
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15.0001 4.99976V10.9998L21.0001 11.0001L21.0001 13.0001L15.0001 12.9998V18.9998L7.99985 12L15.0001 4.99976ZM4.00006 18.9999L4.00006 4.99993H6.00006L6.00006 18.9999H4.00006Z"/></svg>
  </i>
</template>
<script  setup>
  import {iconProps,nm} from "../utils/getProps"
  defineOptions({
    name:"TyiContractLeftFill"
  })
  const props = defineProps(iconProps)
</script>

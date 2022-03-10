<template>
  <PopupWrap @close="$router.back()">
    <slot/>
  </PopupWrap>
</template>

<script>
import PopupWrap from './PopupWrap.vue';

export default {
  name: 'PopupRouterView',
  components: {
    PopupWrap,
  }
}
</script>

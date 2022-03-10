<template>
  <div class="popup-base">
    <div class="popup-base__header">
      <button class="popup-base__close" @click="$parent.$emit('close')">Close</button>
    </div>
    <div class="popup-base__content">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopupBase"
};
</script>

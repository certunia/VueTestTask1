<template>
  <div
    role="dialog"
    aria-modal="true"
    class="popup-wrap popup-wrap--centered"
  >
    <div class="popup-wrap__backdrop" @click="$emit('close')" />

    <slot/>
  </div>
</template>

<script>
export default {
  name: 'PopupWrap',
  mounted() {
    const close = (e) => {
      const ESC = 27;
      if (e.keyCode !== ESC) return;
      this.$emit('close');
    };

    document.addEventListener('keyup', close);

    this.$on('hook:destroyed', () => {
      document.removeEventListener('keyup', close);
    });
  },
}
</script>


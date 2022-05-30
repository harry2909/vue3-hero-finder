<template>
  <ul class="accordion">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      Accordion: {
        count: 0,
        active: null,
      },
    };
  },
  provide() {
    return { Accordion: this.Accordion };
  },
};
</script>

<style>
.accordion {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}
</style>

<template>
  <textarea class="json-viewer" v-model="jsonValue"></textarea>
</template>

<script>
export default {
  created () {
    this.jsonValue = JSON.stringify(this.$store.state.chatbotJSON, undefined, 4);
  },
  data() {
    return {
      jsonValue: ""
    };
  }
};
</script>

<style scoped>
.json-viewer {
  border: 1px solid;
  height: 900px;
  width: 100%;
}
</style>
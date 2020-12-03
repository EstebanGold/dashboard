<template>
  <footer class="primary footer d-flex align-center justify-center">
    <span class="title"> {{ year }} </span>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>

<style scoped>
.footer {
    height: 10vh;
}
</style>
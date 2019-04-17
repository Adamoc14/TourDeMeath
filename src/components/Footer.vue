<template>
  <footer>
    <p>&copy; {{ copyright }}</p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      copyright: "TourDeMeath | All Rights Reserved"
    };
  }
};
</script>

<style scoped>
footer {
  background: yellowgreen;
  color: white;
  display: flex;
}

footer p {
  margin: 0 auto;
}
</style>

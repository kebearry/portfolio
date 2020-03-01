<template>
    <footer class="site-footer">
        <div class="container-fluid">
            <div class="col text-center">
             © {{ currentYear }} Rebecca Tan</p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
  name: "AppFooter",

  computed: {
      currentYear() {
          return new Date().getFullYear();
      }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/overrides/bootstrap/variables";

.site-footer {
  padding: 2.5rem 0;
  font-size: 0.9375rem;
  border-top: 1px solid $blue;
  background-color: $blue;
}
</style>

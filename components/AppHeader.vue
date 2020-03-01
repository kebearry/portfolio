<template>
    <header>
        <nav class="navbar navbar-expand-md navbar-light bg-white" :class="{open: isMobileMenuOpen}">
            <a class="navbar-brand" href="https:///linkedin.com/in/rebecca965" target="_blank">
                <div class="title">REBECCA TAN</div>
            </a>

            <div class="hamburger-menu ml-auto d-md-none" @click="isMobileMenuOpen = !isMobileMenuOpen">
                <span></span>
            </div>

            <div class="site-navigation ml-auto">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link" href="#about" @click="onNavClick">About</a></li>
                    <li class="nav-item"><a class="nav-link" href="#work" @click="onNavClick">Work</a></li>
                    <li class="nav-item"><a class="nav-link" href="#contact" @click="onNavClick">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
  name: "AppHeader",

  data() {
    return {
      isMobileMenuOpen: false
    };
  },

  methods: {
    onNavClick(e) {
      this.isMobileMenuOpen = false;
      this.$scrollTo(e.target.hash);
    }
  }
};
</script>

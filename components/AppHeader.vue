<template>
    <header>
        <nav class="navbar navbar-expand-md navbar-light bg-white" :class="{open: isMobileMenuOpen}">
            <nuxt-link class="navbar-brand" to="/">
                <img src="https://i.imgur.com/mHdwhbb.png" width="100">
            </nuxt-link>
            <div class="hamburger-menu ml-auto d-md-none" @click="isMobileMenuOpen = !isMobileMenuOpen">
                <span></span>
            </div>
            <div class="site-navigation ml-auto">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link" href="#about" @click="onNavClick">About</a></li>
                    <li class="nav-item"><a class="nav-link" href="#work" @click="onNavClick">Work</a></li>
                    <li class="nav-item"><a class="nav-link" href="#blog" @click="onNavClick">Blog</a></li>
                    <li class="nav-item"><a class="nav-link" href="#testimonials" @click="onNavClick">Testimonials</a></li>
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

<style>
.navbar-light .navbar-brand .title {
    font-size: 1.5rem;
}

@media(max-width: 767px) {
    .navbar-light .navbar-nav .nav-link {
        font-size: 2.8rem;
    }
}
</style>

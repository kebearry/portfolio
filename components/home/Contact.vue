<template>
    <section class="contact text-center pt-10 pb-10 pink" id="contact">
        <div class="container">
            <div class="col">
                <h1 class="mb-4 text-white">Get in Touch with Me!</h1>
                <p class="lead text-white mb-8">You can follow me or get in touch with me via the following sites or send me an email.</p>
                <img class="img-fluid round" src="https://media-exp1.licdn.com/dms/image/C5103AQF_Gp-OX-ECzg/profile-displayphoto-shrink_400_400/0?e=1597276800&v=beta&t=t7bkfjIbhEer9yAmWllvlD8fCWQw0X6bcnku_VLkn-c">
                <ul class="social-links list-inline pt-3">
                    <li class="list-inline-item">
                        <a class="github" href="https://github.com/kebearry" target="_blank">
                            <icon name="github" width="40" height="40"></icon>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a class="dribbble" href="https://dribbble.com/kebearry" target="_blank">
                            <icon name="dribbble" width="40" height="40"></icon>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a class="linkedin" href="https://www.linkedin.com/in/rebecca965" target="_blank">
                            <icon name="linkedin" width="40" height="40"></icon>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a class="email" id="email" href="">
                            <icon name="envelope" width="40" height="40"></icon>
                        </a>
                    </li>
                </ul>
                <a class="btn btn-primary" href="https://drive.google.com/file/d/1eF8z0n6RpFwqNouiqxQGjBK8w7USZ0Mx/view" target="_blank">I want to take a look at your resume!</a>
                <svg viewBox="0 0 960 300" class="svg-special">
        	<symbol id="s-text">
        		<text text-anchor="middle" x="50%" y="80%">Work with me</text>
        	</symbol>
        
        	<g class = "g-ants">
        		<use xlink:href="#s-text" class="text-copy"></use>
        		<use xlink:href="#s-text" class="text-copy"></use>
        		<use xlink:href="#s-text" class="text-copy"></use>
        		<use xlink:href="#s-text" class="text-copy"></use>
        		<use xlink:href="#s-text" class="text-copy"></use>
        	</g>
        </svg>
            </div>
        </div>
    </section>
</template>

<script>
import Icon from "../Icon.vue";

export default {
    name: "Contact",

    components: {
        Icon
    },

    mounted() {
        // Trying to avoid email scraping bstrds
        document.querySelector("#email").href = `mailto:${process.env.email}`;
    }
};
</script>

<style lang="scss">
@import "../../assets/scss/overrides/bootstrap/variables";
@import "../../assets/scss/vendor/bootstrap/functions";
@import "../../assets/scss/vendor/bootstrap/variables";
@import "../../assets/scss/vendor/bootstrap/mixins";
.social-links {
    .list-inline-item {
        margin-bottom: 1rem;
        &:not(:last-child) {
            margin-right: 0.75rem;
            @include media-breakpoint-up(sm) {
                margin-right: 2.2rem;
            }
        }
    }
    a {
        color: $gray-900;
        &.card-link:hover {
            @include transition(color 0.3s ease);
        }
        &.twitter:hover {
            @include transition(color 0.3s ease);
        }
        &.github:hover {
            @include transition(color 0.3s ease);
        }
        &.dribbble:hover {
            @include transition(color 0.3s ease);
        }
        &.behance:hover {
            @include transition(color 0.3s ease);
        }
        &.linkedin:hover {
            @include transition(color 0.3s ease);
        }
        &.email:hover {
            @include transition(color 0.3s ease);
        }
    }
}

.pink {
    background: $pink
}

.text-white {
    color: white;
}

.btn {
    color: white;
    font-weight: bold;
}

.round {
    border-radius: 500px;
}

.svg-special {
    display: block;
    font: 9em 'Montserrat';
    width: 960px;
    height: 300px;
    margin: 0 auto;
    @media screen and (max-width: 1024px) {
        display: none;
    }
}

.text-copy {
    fill: none;
    stroke: white;
    stroke-dasharray: 6% 29%;
    stroke-width: 5px;
    stroke-dashoffset: 0%;
    animation: stroke-offset 5.5s infinite linear;
}

.text-copy:nth-child(1) {
    stroke: #FA8072;
    animation-delay: -1;
}

.text-copy:nth-child(2) {
    stroke: #C71585;
    animation-delay: -2s;
}

.text-copy:nth-child(3) {
    stroke: #FF69B4;
    animation-delay: -3s;
}

.text-copy:nth-child(4) {
    stroke: #F08080;
    animation-delay: -4s;
}

.text-copy:nth-child(5) {
    stroke: #FF1493;
    animation-delay: -5s;
}

@keyframes stroke-offset {
    100% {
        stroke-dashoffset: -35%;
    }
}
</style>

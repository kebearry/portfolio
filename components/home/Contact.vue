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
                <a class="btn popup-button" href="https://drive.google.com/file/d/1eF8z0n6RpFwqNouiqxQGjBK8w7USZ0Mx/view" target="_blank">I want to take a look at your resume!</a>
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

//FANCY GRADIENT BUTTON
.popup-button {
    text-transform: uppercase;
    border-radius: 8px;
    background-size: 200% auto;
    box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 1px rgba(0, 0, 0, .08);
    background-image: linear-gradient(to right, $blue 0%, #ffabf4 50%, $gray-300 100%);
    transition: 0.5s;
    &:hover {
        background-position: right center;
    }
}

.round {
    border-radius: 500px;
}

//CROWN ON HOVER
.img-fluid:hover {
    cursor: url(data:image/png;base64,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), pointer
}

.svg-special {
    display: block;
    font: 9em 'Montserrat';
    width: 960px;
    height: 180px;
    margin: 0 auto;
    @media screen and (max-width: 1024px) {
        display: none;
    }
}

//WORK WITH ME ANIMATION
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

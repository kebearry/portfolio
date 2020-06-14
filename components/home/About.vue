<template>
    <section class="about text-center pb-10 pl-4 pr-4 pl-sm-0 pr-sm-0 pt-4" id="about">
        <div class="container">
            <div class="row justify-content-md-center responsive-pad">
                <img src="https://i.imgur.com/mHdwhbb.png" class="mb-4 full-width">
                <div class="col-md-8">
                    <p class="lead mb-8"><i>Before</i> I moved into Application Development, I never quite found a perfect fit. I have done Digital Marketing, Graphic Design, Search Engine Optimization, Content Marketing and even IT Project Management. I was performing in my
                        jobs, yet it <i>wasn't quite enough.</i> I then fell in love with building my mini aesthetic world with the power of code. I knew I had to follow my passion for design and programming when I don't mind doing this for fun even out of
                        work.
                        <br/>
                        <strong claas="mt-2">I’m currently working for <a href="https://www.accenture.com/sg-en/services/interactive-index">Accenture Interactive Delivery</a> as a Full Stack Developer, with a specialization in Frontend Development.</strong></p>
                </div>
            </div>
            <div class="row no-gutters extra-animation">
                <div class="col-md-6">
                    <div class="about-card designer mb-3">
                        <icon name="design" class="pink-text mb-5" width="48" height="48"></icon>
                        <h2 class="pink-text mb-5">Designer</h2>
                        <p class="text-secondary mb-5">I'm a user-centric designer. I believe that User Interface is meant to be intuitive. I like to think of it as a joke; If you have to explain it, it's probably not that good.</p>
                        <p class="pink-text mb-2">I love to design:</p>
                        <p class="text-secondary mb-5">Web/Mobile Applications, UI Central Design System, Brand Identity, Graphic Design &amp; User Journey</p>
                        <p class="pink-text mb-2">Softwares I use:</p>
                        <p class="text-secondary">Adobe Illustrator <br />Adobe Indesign <br />Adobe Photoshop <br />AdobeXD <br />Figma<br />Invision<br />Sketch<br />Zeplin</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="about-card developer">
                        <icon name="console" class="text-primary mb-5" width="48" height="48"></icon>
                        <h2 class="text-primary mb-5">Developer</h2>
                        <p class="text-secondary mb-4">I'm passionate about building software. I enjoy using my eye for design, my unequivocal love for building things, and my mission-driven work ethic to literally change the world.</p>
                        <p class="text-primary mb-2">Skills:</p>
                        <p class="text-secondary mb-4">Java, JavaScript, MuleSoft, NodeJS, Python, <br/>Jquery, HTML, CSS, Less, Sass</p>
                        <p class="text-primary mb-2">Frameworks &amp; Libraries:</p>
                        <p class="text-secondary mb-4">Angular, Ant Mobile Design, Bootstrap, Material UI, React, React Native, VueJS</p>
                        <p class="text-primary mb-2">Database:</p>
                        <p class="text-secondary mb-4">MongoDB, MySQL, PostgresQL</p>
                        <p class="text-primary mb-2">Cloud Technologies:</p>
                        <p class="text-secondary">AWS API Gateway, AWS CodeCommit, AWS EC2, AWS Lambda Functions, AWS S3</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Icon from "../../components/Icon.vue";

export default {
    name: "About",

    components: {
        Icon
    }
};
</script>

<style lang="scss">
@import "../../assets/scss/overrides/bootstrap/variables";
@import "../../assets/scss/vendor/bootstrap/functions";
@import "../../assets/scss/vendor/bootstrap/variables";
@import "../../assets/scss/vendor/bootstrap/mixins";
.about-card {
    margin-bottom: 1.875rem;
    padding: 4.5rem 2rem;
    height: 100%;
    border: 1px solid $gray-300;
    position: relative;
    overflow: hidden;
    .pink-text {
        color: $pink
    }
    @include media-breakpoint-up(sm) {
        padding: 4.25rem 6.25rem;
    }
    &.designer {
        border-bottom-width: 0;
        &:after {
            width: 25rem;
            height: 25rem;
            bottom: 5rem;
            left: -35%;
            position: absolute;
            display: block;
            border-radius: 20rem;
            background-color: $pink;
            content: "";
            z-index: -1;
            opacity: 0.07;
        }
        @include media-breakpoint-up(md) {
            border-right-width: 0;
            border-bottom-width: 1px;
        }
    }
    &.developer {
        &:after {
            width: 25rem;
            height: 25rem;
            top: 5rem;
            right: -40%;
            position: absolute;
            display: block;
            border-radius: 20rem;
            background-color: theme-color("primary");
            content: "";
            z-index: -1;
            opacity: 0.07;
        }
    }
}

.lead {
    font-size: 1rem;
    @media only screen and (min-width: 640px) {
        font-size: 1.25rem;
    }
}

.full-width {
    width: 90vw;
}

.responsive-pad {
    @media only screen and (min-width: 768px) {
        margin-top: -2rem;
    }
    @media only screen and (max-width: 640px) {
    }
}

@keyframes slide {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0%);
    }
}

.extra-animation {
    animation-name: slide;
    animation-duration: 2s;
}
</style>

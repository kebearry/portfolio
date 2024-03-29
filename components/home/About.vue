<template>
    <section
        class="about text-center pb-10 pl-4 pr-4 pl-sm-0 pr-sm-0"
        id="about"
    >
        <div
            class="hero d-flex flex-column justify-content-center text-center pl-4 pr-4 pl-sm-0 pr-sm-0 mt-4"
        >
            <h1>Hi there, I'm Rebecca.</h1>
            <div class="lead-text">
                I bring designs to life through code.
            </div>
        </div>
        <div class="container">
            <div class="row justify-content-md-center responsive-pad">
                <div class="col-md-8">
                    <p class="lead mb-8">
                        <i>Before</i> I moved into Application Development, I
                        never quite found a perfect fit. I have done Digital
                        Marketing, Graphic Design, Search Engine Optimization,
                        Content Marketing and even IT Project Management. I was
                        performing in my jobs, yet it
                        <i>wasn't quite enough.</i> I then fell in love with
                        building my mini aesthetic world with the power of code.
                        I knew I had to follow my passion for design and
                        programming when I don't mind doing this for fun even
                        out of work.
                        <br />
                        <strong claas="mt-2"
                            >I’m currently working for
                            <a
                                href="https://www.accenture.com/sg-en/services/interactive-index"
                                >Accenture Interactive Delivery</a
                            >
                            as a Full Stack Developer, with a specialization in
                            Frontend Development.</strong
                        >
                    </p>
                </div>
            </div>
            <div class="row no-gutters">
                <div class="col-md-6 designer-focus">
                    <div class="layer"></div>
                    <div class="about-card designer mb-3">
                        <icon
                            name="design"
                            class="pink-text mb-5"
                            width="48"
                            height="48"
                        ></icon>
                        <h2 class="pink-text mb-5">Designer</h2>
                        <p class="text-secondary mb-5">
                            I'm a user-centric designer. I believe that User
                            Interface is meant to be intuitive. I like to think
                            of it as a joke; If you have to explain it, it's
                            probably not that good.
                        </p>
                        <p class="pink-text mb-2">I love to design:</p>
                        <p class="text-secondary mb-5">
                            Web/Mobile Applications, UI Central Design System,
                            Brand Identity, Graphic Design &amp; User Journey
                        </p>
                        <p class="pink-text mb-2">Softwares I use:</p>
                        <p class="text-secondary">
                            Adobe Illustrator <br />Adobe Indesign <br />Adobe
                            Photoshop <br />AdobeXD
                            <br />Figma<br />Invision<br />Sketch<br />Zeplin
                        </p>
                    </div>
                </div>
                <div class="col-md-6 developer-focus">
                    <div class="about-card developer">
                        <icon
                            name="console"
                            class="text-primary mb-5"
                            width="48"
                            height="48"
                        ></icon>
                        <h2 class="text-primary mb-5">Developer</h2>
                        <p class="text-secondary mb-4">
                            I'm passionate about building software. I enjoy
                            using my eye for design, my unequivocal love for
                            building things, and my mission-driven work ethic to
                            literally change the world.
                        </p>
                        <p class="text-primary mb-2">Skills:</p>
                        <p class="text-secondary mb-4">
                            Java, JavaScript, MuleSoft, NodeJS, Python,
                            <br />Jquery, HTML, CSS, Less, Sass
                        </p>
                        <p class="text-primary mb-2">
                            Frameworks &amp; Libraries:
                        </p>
                        <p class="text-secondary mb-4">
                            Angular, Ant Mobile Design, Bootstrap, Material UI,
                            React, React Native, VueJS
                        </p>
                        <p class="text-primary mb-2">Database:</p>
                        <p class="text-secondary mb-4">
                            MongoDB, MySQL, PostgresQL
                        </p>
                        <p class="text-primary mb-2">
                            Content Management Systems:
                        </p>
                        <p class="text-secondary mb-4">
                            Adobe Experience Manager, Magnolia, Wordpress
                        </p>
                        <p class="text-primary mb-2">Cloud Technologies:</p>
                        <p class="text-secondary">
                            AWS API Gateway, AWS CodeCommit, AWS EC2, AWS Lambda
                            Functions, AWS S3
                        </p>
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

@media only screen and (min-width: 640px) {
    .hero.d-flex.flex-column.justify-content-center {
        padding-bottom: 5em;
    }
}
.hero {
    @keyframes reveal {
        from {
            width: 0;
        }
    }

    @keyframes blink {
        0% {
            background-color: $pink;
        }

        50% {
            background-color: transparent;
        }

        100% {
            background-color: $pink;
        }
    }

    h1 {
        margin-bottom: 1.25rem;
        font-size: 2.5rem;
        margin-top: -1em;

        @include media-breakpoint-up(sm) {
            font-size: 3.375rem;
        }
    }

    p {
        font-size: 1.5rem;
    }

    // Adjust size and animation steps to number of characters present
    .lead-text {
        color: $pink;
        @media only screen and (min-width: 640px) {
            position: relative;
            width: 30ch;
            overflow: hidden;
            font-weight: 500;
            font-size: 1.2rem;
            font-size: 1.5rem;
            white-space: nowrap;
            animation: reveal 3s steps(30, end);
            margin: 0 auto;
            padding-bottom: 8px;

            &::after {
                position: absolute;
                top: 0;
                right: 0;
                content: "";
                width: 2px;
                height: 100%;
                background-color: $pink;
                animation: blink 0.6s infinite;
            }
        }
    }
}
.about-card {
    margin-bottom: 1.875rem;
    padding: 4.5rem 2rem;
    height: 100%;
    border: 1px solid $gray-300;
    position: relative;
    overflow: hidden;
    .pink-text {
        color: $pink;
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

.designer-focus {
    background-image: url(https://i.pinimg.com/originals/26/da/ba/26dabaee331575f7be35d1e329fb0243.png);
    transition: 0.45s ease-in-out;
    .layer {
        background-color: rgba(#fff, 0.8);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
}

.developer-focus {
    background-image: url(https://www.toptal.com/designers/subtlepatterns/patterns/double-bubble-outline.png);
    transition: 0.45s ease-in-out;
    .layer {
        background-color: rgba(#fff, 0.6);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
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
        margin-top: -4rem;
    }
    @media only screen and (max-width: 1024px) {
        margin-top: 1rem;
    }
    @media only screen and (max-width: 640px) {
    }
}
</style>

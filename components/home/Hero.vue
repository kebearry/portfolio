<template>
    <div
        class="hero d-flex flex-column justify-content-center text-center pt-8 pl-4 pr-4 pl-sm-0 pr-sm-0 mt-4"
    >
        <h1 class="pt-8">Hi there, I'm Rebecca.</h1>
        <div class="lead-text">
           I bring designs to life through code.
        </div>
    </div>
</template>

<script>
export default {
    name: "Hero"
};
</script>

<style lang="scss">
@import "../../assets/scss/overrides/bootstrap/variables";
@import "../../assets/scss/vendor/bootstrap/functions";
@import "../../assets/scss/vendor/bootstrap/variables";
@import "../../assets/scss/vendor/bootstrap/mixins";

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

        @include media-breakpoint-up(sm) {
            font-size: 3.375rem;
        }
    }

    p {
        font-size: 1.5rem;
    }

    // Adjust size and animation steps to number of characters present
    .lead-text {
        position: relative;
        width: 30ch;
        overflow: hidden;
        color: $pink;
        font-weight: 500;
        font-size: 1.2rem;
        @media only screen and (min-width: 640px) {
            font-size: 1.5rem;
            width: 24ch;
            animation: reveal 3s steps(24, end);
        }
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
</style>

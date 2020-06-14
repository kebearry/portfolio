<template>
    <section class="about text-center pt-10 pb-10" id="work">
        <div class="container-fluid">
            <h1 class="mb-5">My Favourite Works</h1>
            <div class="row">
                <div class="col">
                    <p class="lead mb-8">Here’s my design feed from <a href="https://dribbble.com/kebearry">Dribbble</a>. You can see more of my designs at <a href="https://dribbble.com/kebearry">Dribbble</a>.</p>
                </div>
            </div>
            <div class="row">
                <template v-if="dribbbleShots.length > 0">
                                                <div class="col-lg-4" v-for="shot in dribbbleShots" :key="shot.id">
                                                    <figure>
                                                        <img class="img-fluid" :src="shot.images.hidpi" :alt="shot.title">
                                                        <figcaption class="d-flex flex-column justify-content-center">
                                                            <div class="gallery-title">{{ shot.title }}</div>
                                                            <a :href="shot.html_url" target="_blank"><icon name="link-external" class="mr-2 mb-1" width="16" height="16"></icon>View on Dribbble</a>
                                                        </figcaption>
                                                        <div class="overlay"></div>
                                                    </figure>
                                                </div>
</template>

<template v-else>
    <div class="col text-center">
        <p>Looks like there's a problem accessing Dribbble API. Please reload the page.</p>
    </div>
</template>
            </div>
            <div class="row">
                <div class="col">
                    <p class="lead mb-8 mt-4">Here’s my github feed from <a href="https://github.com/kebearry">GitHub</a>.                     
                    You can see more of my code at <a href="https://github.com/kebearry">GitHub.</a></p>
                </div>
            </div>
            <div class="row">
<template v-if="myRepositories.length>
     0">
    <div class="col-lg-4 mb-4" v-for="shot in myRepositories" :key="myRepositories.id">
        <div class="movie-card" data-movie="superbearree">
            <div class="movie-card__overlay"></div>
            <div class="movie-card__share"></div>
            <div class="movie-card__content">
                <div class="movie-card__header">
                    <h3 class="movie-card__title">{{ shot.name }}</h3>
                    <h4 class="movie-card__info">Github</h4>
                </div>
                <p class="movie-card__desc pr-4 pl-4">{{ shot.description }}</p>
                <button class="special-btn btn-outline" type="button"><a :href="shot.svn_url">View Repository</a></button>
            </div>
        </div>
    </div>
</template>

<template v-else>
    <div class="col text-center">
        <p>Looks like there's a problem accessing Github API. Please reload the page.</p>
    </div>
</template>
            </div>
            <div class="row">
                <div class="col pt-6">
                    <a class="btn btn-dribbble mr-sm-3 mb-3 mb-sm-0" href="https://dribbble.com/kebearry" target="_blank"><icon name="dribbble" class="mr-2 mb-1" width="22" height="22"></icon>See me on Dribbble</a>
                    <a class="btn btn-primary" href="https://github.com/kebearry" target="_blank"><icon name="github" class="mr-2 mb-1" width="22" height="22"></icon>See me on GitHub</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Icon from "../Icon.vue";

export default {
    name: "Work",

    components: {
        Icon
    },

    props: {
        dribbbleShots: {
            type: Array,
            default: []
        },
        myRepositories: {
            type: Array,
            default: () => []
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/overrides/bootstrap/variables";
@import "../../assets/scss/vendor/bootstrap/functions";
@import "../../assets/scss/vendor/bootstrap/variables";
@import "../../assets/scss/vendor/bootstrap/mixins";
$background-image: url(https://avatars2.githubusercontent.com/u/22834157?v=4);
$secondary-color: #D3D3D3;
.container-fluid {
    width: 85vw;
    @media (min-width: 1500px) {
        width: 75vw;
    }
}

section {
    border-bottom: 1px solid $gray-300;
}

figcaption,
.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
}

figcaption {
    padding: 2rem;
    color: #fff;
    z-index: 1;
    transition: 0.45s ease-in-out;
}

.overlay {
    background-color: $gray-900;
    transition: 0.45s ease-in-out;
}

img {
    transform: scale(1);
    transition: 0.25s ease-in-out;
}

figure {
    margin-bottom: 1.875rem;
    position: relative;
    overflow: hidden;
    cursor: default;
    &:hover {
        figcaption {
            opacity: 1;
        }
        .overlay {
            opacity: 1;
        }
        img {
            transform: scale(1.15);
        }
    }
    a {
        color: lighten(theme_color("primary"), 10%);
        &:hover,
        &:active {
            color: theme_color("primary");
        }
    }
}

.gallery-title {
    margin-bottom: 0.3rem;
    font-size: 1.5rem;
    font-weight: 300;
}

.btn {
    width: 100%;
    color: white;
    font-weight: bold;
    @include media-breakpoint-up(sm) {
        width: 13.75rem;
    }
}

button {
    font-family: inherit;
    border: 0;
    cursor: pointer;
    &:focus {
        outline: 0;
    }
}

.movie-card {
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    min-height: 50px;
    display: block;
    border-radius: 8px;
    box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.25);
    position: relative;
    @media screen and (max-width: 800px) {
        width: 95%;
        max-width: 95%;
    }
    @media screen and (max-width: 600px) {
        background-position: 50% 0%;
        background-size: cover;
        height: 400px;
    }
    &[data-movie="superbearree"] {
        background-image: $background-image;
    }
    &__overlay {
        width: 100%;
        height: 100%;
        border-radius: 8px;
        background: linear-gradient(to right, rgba(42, 159, 255, .2) 0%, rgba(33, 33, 32, 1) 90%, rgba(33, 33, 32, 1) 100%);
        background-blend-mode: multiply;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        @media screen and (max-width: 600px) {
            background: linear-gradient(to bottom, rgba(42, 159, 255, .2) 0%, rgba(33, 33, 32, 1) 90%, rgba(33, 33, 32, 1) 100%);
        }
    }
    &__share {
        padding: 1em;
        display: inline-block;
        width: 100%;
        max-width: 130px;
        @media screen and (max-width: 600px) {
            display: block;
            width: 100%;
        }
    }
    &__icon {
        color: #ffffff;
        mix-blend-mode: lighten;
        opacity: .4;
        background: none;
        padding: 0;
        &:hover {
            opacity: 1;
            mix-blend-mode: lighten;
        }
        &:not(:first-of-type) {
            margin-left: 5px;
        }
        i {
            font-size: 1.2em;
        }
    }
    &__content {
        color: white;
        width: 100%;
        max-width: 370px;
        display: flex;
        align-items: center;
        flex-direction: column;
        position: relative;
        padding-bottom: 3em;
        @media screen and (max-width: 1000px) {
            width: 50%;
        }
        @media screen and (max-width: 600px) {
            margin-top: 4.2em;
            width: 100%;
            max-width: 100%;
            padding: 0 1em 1em;
        }
    }
    &__header {
        margin-bottom: 2em;
    }
    &__title {
        color: #ffffff;
        margin-bottom: .25em;
        opacity: .75;
    }
    &__info {
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: .8em;
        color: $secondary-color;
        line-height: 1;
        margin: 0;
        font-weight: 700;
        opacity: .5;
    }
    &__desc {
        font-weight: 300;
        opacity: .84;
        margin-bottom: 2em;
    }
}

.special-btn {
    padding: .5rem 2rem;
    background-color: rgba(255, 255, 255, .4);
    color: rgba(255, 255, 255, 1);
    a {
        color: white;
    }
}

.btn-outline {
    background-color: transparent;
    border: 3px solid #ffffff;
}

.special-btn::before {
    content: '>>';
    vertical-align: middle;
    font-size: 1.5em;
    padding-right: .5em;
}

.special-btn-outline:hover {
    border-color: $secondary-color;
    color: $secondary-color;
    box-shadow: 0px 1px 8px 0px rgba(245, 199, 0, .2);
}
</style>

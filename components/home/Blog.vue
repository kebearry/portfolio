<template>
    <section class="about text-center pt-8" id="blog">
        <div class="container-fluid">
            <h1 class="mb-5">I write, lesser than I wish to</h1>
            <div class="row">
                <template v-if="myBlogPosts.length > 0">
                    <a
                        class="card-link col-lg-4"
                        v-for="blog in myBlogPosts"
                        :key="blog.id"
                        :href="blog.link"
                    >
                        <div
                            class="card"
                            v-bind:style="{
                                backgroundImage: 'url(' + blog.thumbnail + ')'
                            }"
                        >
                            <div class="content">
                                <h2 class="blog-title">
                                    {{ shortenText(blog.title, 0, 80) }}...
                                </h2>
                                <p class="copy">
                                    ...{{
                                        shortenText(
                                            stripHtml(blog.description),
                                            30,
                                            350
                                        )
                                    }}...
                                </p>
                            </div>
                        </div>
                    </a>
                </template>
                <template v-else>
                    <div class="col text-center">
                        <p>
                            Looks like there's a problem accessing Medium API.
                            Please reload the page.
                        </p>
                    </div>
                </template>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Blog",

    props: {
        myBlogPosts: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        shortenText(text, startingPoint, maxLength) {
            return text.length > maxLength
                ? text.slice(startingPoint, maxLength)
                : text;
        },
        stripHtml(text) {
            return text.replace(/<\/?[^>]+>/gi, " ");
        }
    }
};
</script>

<style lang="scss">
@import "../../assets/scss/overrides/bootstrap/variables";
@import "../../assets/scss/vendor/bootstrap/functions";
@import "../../assets/scss/vendor/bootstrap/variables";
@import "../../assets/scss/vendor/bootstrap/mixins";
$border: #ebebeb;
$shadow: rgba(0, 0, 0, 0.2);

.card {
    position: relative;
    display: flex;
    align-items: flex-end;
    overflow: hidden;
    padding: 1rem;
    width: 100%;
    text-align: center;
    color: whitesmoke;
    background-size: cover;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1),
        0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1),
        0 16px 16px rgba(0, 0, 0, 0.1);
}
@media (min-width: 600px) {
    .card {
        height: 350px;
    }
}
.card:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 110%;
    background-size: cover;
    background-image: linear-gradient(to right, rgba(42, 159, 255, 0.2) 0%, #212120 99%, white 100%);
    background-position: 0 0;
      opacity: 0.5;
  z-index: 300;
    transition: transform calc(var(--d) * 1.5) var(--e);
    pointer-events: none;
}
.card:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200%;
    pointer-events: none;
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.009) 11.7%,
        rgba(0, 0, 0, 0.034) 22.1%,
        rgba(0, 0, 0, 0.072) 31.2%,
        rgba(0, 0, 0, 0.123) 39.4%,
        rgba(0, 0, 0, 0.182) 46.6%,
        rgba(0, 0, 0, 0.249) 53.1%,
        rgba(0, 0, 0, 0.32) 58.9%,
        rgba(0, 0, 0, 0.394) 64.3%,
        rgba(0, 0, 0, 0.468) 69.3%,
        rgba(0, 0, 0, 0.54) 74.1%,
        rgba(0, 0, 0, 0.607) 78.8%,
        rgba(0, 0, 0, 0.668) 83.6%,
        rgba(0, 0, 0, 0.721) 88.7%,
        rgba(0, 0, 0, 0.762) 94.1%,
        rgba(0, 0, 0, 0.79) 100%
    );
    backdrop-filter: blur(5px) grayscale(0.4) contrast(0.8) sepia(0.01);
    transform: translateY(-50%);
    transition: transform calc(var(--d) * 2) var(--e);
}

.content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 1rem;
    transition: transform var(--d) var(--e);
    z-index: 1;
}
.content > * + * {
    margin-top: 1rem;
}

.blog-title {
    color: white;
    font-size: 1.3rem;
    font-weight: bold;
    line-height: 1.2;
}

.copy {
    font-family: var(--font-serif);
    font-size: 1.125rem;
    font-style: italic;
    line-height: 1.35;
}

@media (hover: hover) and (min-width: 600px) {
    .card:after {
        transform: translateY(0);
    }

    .content {
        transform: translateY(calc(100% - 4.5rem));
    }
    .content > *:not(.blog-title) {
        opacity: 0;
        transform: translateY(1rem);
        transition: transform var(--d) var(--e), opacity var(--d) var(--e);
    }

    .card:hover,
    .card:focus-within {
        align-items: center;
    }
    .card:hover:before,
    .card:focus-within:before {
        transform: translateY(-4%);
    }
    .card:hover:after,
    .card:focus-within:after {
        transform: translateY(-50%);
    }
    .card:hover .content,
    .card:focus-within .content {
        transform: translateY(0);
    }
    .card:hover .content > *:not(.blog-title),
    .card:focus-within .content > *:not(.blog-title) {
        opacity: 1;
        transform: translateY(0);
        transition-delay: calc(var(--d) / 8);
    }

    .card:focus-within:before,
    .card:focus-within:after,
    .card:focus-within .content,
    .card:focus-within .content > *:not(.blog-title) {
        transition-duration: 0s;
    }
}
.container-fluid {
    width: 85vw;

    @media (min-width: 1500px) {
        width: 75vw;
    }
}

.card-link {
    position: relative;
    display: block;
    color: $gray-900;
    text-decoration: none;
    padding-bottom: 2rem;
    &:hover .post-description {
        @include transition(color 0.3s ease);
    }
    &:hover .post-title {
        @include transition(color 0.3s ease);
    }
    &:hover .post-image {
        @include transition(opacity 0.3s ease);
        opacity: 0.9;
    }
}

</style>

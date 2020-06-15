<template>
    <section class="about text-center pt-8" id="blog">
        <div class="container-fluid">
            <h1 class="mb-5">I write, lesser than I wish to</h1>
            <div class="row">
                <template v-if="myBlogPosts.length>0">
                        <a class="card-link col-lg-6" v-for="blog in myBlogPosts" :key="blog.id" :href="blog.link" >
                        <article class="blog-card">
                            <img class="post-image" :src="blog.thumbnail" />
                            <div class="article-details">
                            <h3 class="post-title">{{shortenText(blog.title, 0, 80) }}...</h3>
                                <p class="post-description">...{{shortenText(stripHtml(blog.description), 30, 350) }}...</p>
                                <p class="post-author">By {{ blog.author }}</p>
                            </div>
                        </article>
                        </a>
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
            return text.length > maxLength ?
                text.slice(startingPoint, maxLength) :
                text
        },
        stripHtml(text){
          return text.replace(/<\/?[^>]+>/ig, " ");
        }
    }
};
</script>

<style lang="scss">
@import "../../assets/scss/overrides/bootstrap/variables";
@import "../../assets/scss/vendor/bootstrap/functions";
@import "../../assets/scss/vendor/bootstrap/variables";
@import "../../assets/scss/vendor/bootstrap/mixins";
$bg: #eedfcc;
$text: #777;
$black: #121212;
$white: #fff;
$red: #e04f62;
$border: #ebebeb;
$shadow: rgba(0, 0, 0, 0.2);
.container-fluid {
  width: 85vw;

  @media (min-width: 1500px) {
    width: 75vw;
  }
}

.blog-card {
    display: flex;
    flex-direction: column;
    background: $white;
    box-shadow: 16px 16px 32px #d4d4d4, 
             -16px -16px 32px #ffffff;
    border-radius: 0.375rem;
    overflow: hidden;
    min-height: 350px;
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

.post-image {
    @include transition(opacity 0.3s ease);
    display: block;
    width: 100%;
    object-fit: cover;
}

.article-details {
    padding: 1.5rem;
}

.post-category {
    display: inline-block;
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 0.0625rem;
    margin: 0 0 0.75rem 0;
    padding: 0 0 0.25rem 0;
    border-bottom: 0.125rem solid $border;
}

.post-title {
    @include transition(color 0.3s ease);
    font-size: 1.125rem;
    line-height: 1.4;
    color: $black;
    font-weight: 700;
    margin: 0 0 0.5rem 0;
}

.post-author {
    font-size: 0.875rem;
    line-height: 1;
    margin: 1.125rem 0 0 0;
    padding: 1.125rem 0 0 0;
    border-top: 0.0625rem solid $border;
}

@media (max-width: 40rem) {
    #container {
        width: 18rem;
        height: 50rem;
    }
    .blog-card {
        flex-wrap: wrap;
    }
}

@supports (display: grid) {
    .post-image {
        height: 100%;
    }
    .blog-card {
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-rows: 1fr;
    }
    @media (max-width: 40rem) {
        .blog-card {
            grid-template-columns: auto;
            grid-template-rows: 12rem 1fr;
        }
    }
}
</style>
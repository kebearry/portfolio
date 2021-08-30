<template>
    <div class="site-content">
        <lottie
            :width="360"
            :height="360"
            :options="lottieOptions"
            v-on:animCreated="handleAnimation"
        />
        <hero></hero>
        <about></about>
        <work
            :dribbbleShots="dribbbleShots"
            :myRepositories="myRepositories"
        ></work>
        <blog :myBlogPosts="myBlogPosts"></blog>
        <testimonial></testimonial>
        <contact></contact>
    </div>
</template>

<script>
import axios from "axios";
import Hero from "../components/home/Hero.vue";
import About from "../components/home/About.vue";
import Work from "../components/home/Work.vue";
import Contact from "../components/home/Contact.vue";
import Testimonial from "../components/home/Testimonial.vue";
import Blog from "../components/home/Blog.vue";
import lottie from "vue-lottie/src/lottie.vue";
import * as animationData from "/assets/coding-girl.json";

export default {
    name: "Home",

    components: {
        Hero,
        About,
        Work,
        Contact,
        Testimonial,
        Blog,
        lottie
    },

    methods: {
        handleAnimation: function(anim) {
            this.anim = anim;
        }
    },

    data() {
        return {
            anim: null, // for saving the reference to the animation
            lottieOptions: { animationData: animationData.default }
        };
    },

    mounted() {
        if (process.browser) {
            window.addEventListener("hashchange", function() {
                var current = window.location.hash;
                console.log("hash changed to " + current);
            });
        }
    },

    async asyncData() {
        try {
            let myRepositories;
            let myBlogPosts;

            /**Dribble Related API**/
            const { data } = await axios.get(
                "https://api.dribbble.com/v2/user/shots?page=1&per_page=15",
                {
                    headers: {
                        Authorization: `Bearer ${process.env.dribbbleToken}`
                    }
                }
            );
            const excludedShots = [
                3752525,
                3882608,
                3663209,
                3489448,
                10506882,
                12059638
            ];

            const filteredShots = data.filter(
                shot => !excludedShots.includes(shot.id)
            );
            const dribbbleShots = filteredShots.slice(0, 9);

            /**Github Related API**/

            const excludedRepos = [230878700, 148982518];

            await axios
                .get("https://api.github.com/users/kebearry/repos")
                .then(
                    response =>
                        (myRepositories = response.data.filter(
                            repo => !excludedRepos.includes(repo.id)
                        ))
                );

            /**Blogpost Related API**/
            await axios
                .get(
                    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kebearry",
                    {
                        params: {
                            t: Math.round(+new Date() / 1000)
                        }
                    }
                )
                .then(response => response.data)
                .then(data => {
                    myBlogPosts = data.items.slice(0, 9); //This is an array with the content. No feed, no info about author etc..
                });

            return { dribbbleShots, myRepositories, myBlogPosts };
        } catch (err) {
            return { dribbbleShots: [], myRepositories: [], myBlogPosts: [] };
        }
    }
};
</script>

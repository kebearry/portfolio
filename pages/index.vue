<template>
    <div class="site-content">
        <hero></hero>
        <about></about>
        <work :dribbbleShots="dribbbleShots" :myRepositories="myRepositories"></work>
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

export default {
    name: "Home",

    components: {
        Hero,
        About,
        Work,
        Contact,
        Testimonial,
        Blog,
    },

    async asyncData() {
        try {
            let theRepo;
            let myRepositories;
            let myBlogPosts;

            const { data } = await axios.get(
                "https://api.dribbble.com/v2/user/shots?page=1&per_page=15", {
                    headers: { Authorization: `Bearer ${process.env.dribbbleToken}` }
                }
            );

            await axios.get(
                "https://api.github.com/users/kebearry/repos"
            ).then(response => (myRepositories = response.data))

            await axios.get("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kebearry", {
                    params: {
                        t: Math.round(+new Date() / 1000)
                    }
                })
                .then(response => response.data)
                .then(data => {
                    myBlogPosts = data.items //This is an array with the content. No feed, no info about author etc..
                })

            const excludedShots = [
                3752525,
                3882608,
                3663209,
                3489448,
            ];

            const filteredShots = data.filter(
                shot => !excludedShots.includes(shot.id)
            );
            const dribbbleShots = filteredShots.slice(0, 9);
            return { dribbbleShots, myRepositories, myBlogPosts };
        } catch (err) {
            return { dribbbleShots: [], myRepositories: [], myBlogPosts: [] };
        }
    },
};
</script>

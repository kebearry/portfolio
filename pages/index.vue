<template>
    <div class="site-content">
        <hero></hero>
        <about></about>
        <work :dribbbleShots="dribbbleShots" :myRepositories="myRepositories"></work>
        <contact></contact>
    </div>
</template>

<script>
import axios from "axios";
import Hero from "../components/home/Hero.vue";
import About from "../components/home/About.vue";
import Work from "../components/home/Work.vue";
import Contact from "../components/home/Contact.vue";

export default {
  name: "Home",

  components: {
    Hero,
    About,
    Work,
    Contact
  },

  async asyncData() {
    try {
      let myRepositories; 

      const { data } = await axios.get(
        "https://api.dribbble.com/v2/user/shots?page=1&per_page=15",
        {
          headers: { Authorization: `Bearer ${process.env.dribbbleToken}` }
        }
      );

      await axios.get(
        "https://api.github.com/users/kebearry/repos"
      ).then(response => (myRepositories = response.data))


      const excludedShots = [
        3752525, // Dribbble invites
        3882608, // This website
        3663209, // UI for Bridge.NET Unit Test Results
        3489448 // XLRStats Dashboard
      ];

      const filteredShots = data.filter(
        shot => !excludedShots.includes(shot.id)
      );
      const dribbbleShots = filteredShots.slice(0, 9);
      console.log(dribbbleShots + 'end of dribble' +myRepositories)
      return { dribbbleShots, myRepositories};
    } catch (err) {
      return { dribbbleShots: [], myRepositories: []};
    }
  },
  //   async fetchRepoData(){
  //   try{
  //     const { data } = await axios.get(
  //       "https://api.github.com/users/kebearry/repos"
  //     )
  //     const filteredShots = data.filter(
  //       shot => !excludedShots.includes(shot.id)
  //     );
  //     const myRepositories = filteredShots.slice(0, 9);
  //     console.log(myRepositories)
  //     return { myRepositories };
  //   } catch (err){
  //     return { myRepositories: []}
  //   }
  // }
};
</script>

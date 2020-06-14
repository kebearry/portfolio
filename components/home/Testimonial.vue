<template> 
  <section class="about text-center pt-8 pl-4 pr-4" id="testimonials">
    <h1 class="mb-5">What Others Say About Me</h1>
    <div class="wrapper border-radius">
      <div class="description text-right">
          <p>Rebecca played a key role in leading the design and delivery of key assets. As assets are built in parallel, she was able to clearly segregate her time to ensure that projects are delivered in a timely manner. She consistently devoted her time to upskill and improve herself. She also demonstrated effectve communication skills which enabled efficient collaboration.</p>
      </div>
      <div class="title">Strong<small>Work ethic</small> Rose Up to<small>Challenges</small></div>
    </div>
    <div class="wrapper">
      <div class="title">'CAN DO' <small>attitude</small> Delivers <small>Results</small></div>
      <div class="description">
          <p>Rebecca is a versatile, determined and energetic worker, with a 'can do' attitude that delivers results. In working with Rebecca, I found her able to leverage her computing background and business intuition, while staying grounded in practicality. She also has a welcome bias for action that enables her to join and become a valuable member of technology teams quickly</p>
      </div>
    </div>
    <div class="wrapper border-radius">
      <div class="description text-right">
          <p>Despite being new to AEM, Rebecca has been able to analyze the given requirements and apply what she has learnt and contribute to the project by building scalable components with minimal supervision. Rebecca has proved herself to be able to work independently as a developer.</p>
      </div>
      <div class="title"><small>Build</small>Scalable<small>Components</small> Minimal<small>Supervision</small></div>
    </div>
    <div class="wrapper">
      <div class="title">Tripple-hatted <small>back-end developer, front-end developer and a UI designer</small></div>
      <div class="description">
          <p> I was thoroughly impressed with what Rebecca brought to the table on a technical front. Her work was not only well thought out, but they consistently met the high quality demanded by our project managers. Rebecca also never failed to brighten up the room with her cheerful disposition and was a joy to work with!</p>
      </div>
    </div>
    <div class="wrapper border-radius">
      <div class="description text-right">
          <p>Rebecca has contributed significantly in the overall UI/UX design and front-end development of the product. She has been constantly engaging the back-end team to clarify the requirements and the design of the APIs. This has significantly reduce the gap between the front-end team and back-end team. Besides, she also actively providing constructive feedback to the product team that further improve the product itself from a developer standpoint.</p>
      </div>
      <div class="title">Fast Learner<small>picks up skills quickly</small> Apply<small>immediately</small></div>
    </div>
    <div class="wrapper">
      <div class="title">Perfect Mix of<small>technical, design, process and scope </small></div>
      <div class="description">
          <p> Rebecca has extremely outstanding skills which are needed for a great FED. She has the perfect mix of technical, design, process and scope to ensure any requirement is communicated and implemented. Its very hard to find a FED with that technical talent and backend skills to accelerate FED deliverables. I was very impressed about how quick Rebecca grasped and took on a platform she never worked with before.</p>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: "Testimonial",
};

</script>

<style lang="scss">
@import "../../assets/scss/overrides/bootstrap/variables";
@import "../../assets/scss/vendor/bootstrap/functions";
@import "../../assets/scss/vendor/bootstrap/variables";
@import "../../assets/scss/vendor/bootstrap/mixins";

.wrapper {
  @media only screen and (min-width: 600px) {
    width: 50vw;
    height: 300px;
    border: 5px solid $gray-900;

  }
  height: 200px;
  display: table;
  border: 2px solid $gray-900;
  margin: 50px auto;
  padding: 20px;
  position: relative;
}
.wrapper:after, .wrapper:before {
  quotes: "“" "”" "‘" "’";
  content: "";
  position: absolute;
  font-size: 50px;
  color: $gray-900;
  background: #fff;
}
.wrapper:after {
  content: open-quote;
  top: 0;
  left: 0;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  box-shadow: 10px 10px 0 #fff;
}
.wrapper:before {
  content: close-quote;
  bottom: 0;
  right: 0;
  -webkit-transform: translate(50%, 50%);
          transform: translate(50%, 50%);
  box-shadow: -10px -10px 0 #fff;
}

.title, .description {
  display: table-cell;
  width: 50%;
  vertical-align: middle;
  font-weight: 100;
}

.description {
  font-size: 14px;
}

.title:nth-child(odd){
  color: #90d3d9;
  font-size: 2.1rem;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  padding: 0 10px 0 0;
}
.title:nth-child(even){
  color: #f7a6b4;
  font-size: 2.1rem;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  padding: 0 0 0 10px;
}
.title small {
  display: block;
  font-size: 1rem;
  text-align: center;
}

.border-radius {
  border-radius: 30px;
}

.text-right {
  text-align: right;
}

</style>
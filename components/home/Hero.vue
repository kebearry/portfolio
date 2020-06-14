<template>
        <div class="hero d-flex flex-column justify-content-center text-center pt-8 pl-4 pr-4 pl-sm-0 pr-sm-0 mt-4">
            <h1>Application Developer</h1>
            <p class="lead mb-lg-5 subtitle">I love designing. I love coding. I love bringing designs to life through code.</p>
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

  @include media-breakpoint-up(sm) {
  }

    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        -moz-transform: translateY(0);
        -ms-transform: translateY(0);
        -webkit-transform: translateY(0);
        transform: translateY(0);
      }
      40% {
        -moz-transform: translateY(-30px);
        -ms-transform: translateY(-30px);
        -webkit-transform: translateY(-30px);
        transform: translateY(-30px);
      }
      60% {
        -moz-transform: translateY(-15px);
        -ms-transform: translateY(-15px);
        -webkit-transform: translateY(-15px);
        transform: translateY(-15px);
      }
    }

  h1 {
    margin-bottom: 1.25rem;
    font-size: 2.5rem;
    animation-name: bounce;
    animation-duration: 5s;

    @include media-breakpoint-up(sm) {
      font-size: 3.375rem;
    }
  }

  p {
    font-size: 1.5rem;
  }

  .subtitle{
    color: $pink;
    font-weight: 500;
    font-size: 1.2rem;
    @media only screen and (min-width: 640px) {
		  font-size: 1.5rem;
	  }
  }
}
</style>

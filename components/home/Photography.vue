<template>
    <section class="about text-center pt-8" id="photography">
        <h1 class="mb-5">Things I'd do for fun, joy and laughter</h1>
        <div id="gallery">
            <div><img src="https://i.imgur.com/hrDPo9V.jpg" /><a href="#"><small>[Photography]</small><br>Family Thing</a></div>
            <div><img src="https://i.imgur.com/YHbYktK.jpg" /><a href="#"><small>[Photography]</small><br>Small Things Matter</a></div>
            <div><img src="https://i.imgur.com/LTwLXT7.jpg" /><a href="#"><small>[Photography]</small><br>Of Lights</a></div>
            <div><img src="https://i.imgur.com/wbvcv5z.jpg" /><a href="#"><small>[Photography]</small><br>Of Levels</a></div>
            <div><img src="https://i.imgur.com/AHG1Xlg.jpg" /><a href="#"><small>[Photography]</small><br>Of Architecture</a></div>
            <div><img src="https://i.imgur.com/rJq2d9l.jpg" /><a href="#"><small>[Photography]</small><br>Within Sight</a></div>
            <div><img src="https://i.imgur.com/swmS46b.jpg" /><a href="#"><small>[Illustration]</small><br>Of Family</a></div>
            <div><img src="https://i.imgur.com/c7OYIl3.jpg" /><a href="#"><small>[Illustration]</small><br>Of SO</a></div>
            <div><img src="https://i.imgur.com/HIlW2q9.jpg" /><a href="#"><small>[Photography]</small><br>Of Clouds and Mountains</a></div>
            <div><img src="https://i.imgur.com/qniGJuy.jpg" /><a href="#"><small>[Photography]</small><br>Of Spaces</a></div>
            <div><img src="https://i.imgur.com/OXXHDg3.jpg" /><a href="#"><small>[Photography]</small><br>Of Shadows</a></div>
            <div><img src="https://i.imgur.com/uDfODGH.jpg" /><a href="#"><small>[Photography]</small><br>Dolly Zoom</a></div>
            <div><img src="https://i.imgur.com/DAeyaA9.jpg" /><a href="#"><small>[Photography]</small><br>Of Conquest</a></div>
    
    
            <div><img src="https://i.imgur.com/untAZKb.jpg" /><a href="#"><small>[Photography]</small><br>Of Hanoi</a></div>
            <div><img src="https://i.imgur.com/qhtqLnK.jpg" /><a href="#"><small>[Photography]</small><br>Symmetry</a></div>
            <div><img src="https://i.imgur.com/mrlJN5F.jpg" /><a href="#"><small>[Photography]</small><br>Light in Darkness</a></div>
            <div><img src="https://i.imgur.com/oV8C8FS.jpg" /><a href="#"><small>[Photography]</small><br>Of Halong Bay</a></div>
            <div><img src="https://i.imgur.com/VrNF3tc.jpg" /><a href="#"><small>[Photography]</small><br>Behind The Mask</a></div>
    
    
        </div>
    </section>
</template>

<script>
export default {
    name: "Photography",
};
</script>

<style lang="scss">
@import "../../assets/scss/overrides/bootstrap/variables";
@import "../../assets/scss/vendor/bootstrap/functions";
@import "../../assets/scss/vendor/bootstrap/variables";
@import "../../assets/scss/vendor/bootstrap/mixins";
$size: 6;
#gallery {
    display: grid;
    grid-template: repeat($size, 1fr) / repeat($size, 1fr);
    grid-gap: 0.5em;
    @media (max-width: 800px) {
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;
        &>div {
            width: 48%;
            margin: 1%;
            @media (max-width: 350px) {
                width: 98%;
            }
        }
    }
    &>div {
        //Grid Structure
        &:nth-child(#{$size}n + 1) {
            grid-column: span 2;
            grid-row: span 2;
        }
        &:nth-child(2) {
            grid-column: span 3;
            grid-row: span 3;
        }
        &:nth-child(4) {
            grid-column: span 1;
            grid-row: span 2;
        }
        &>a {
            text-align: center;
            font-size: 2rem;
            font-weight: 100;
            opacity: 0;
            position: absolute;
            color: #fff;
            padding: 2rem;
            mix-blend-mode: difference;
            width: 100%;
            height: 100%;
            transition: all ease 1s;
            small {
                font-size: 0.8rem;
                display: block;
            }
        }
        &>img {
            object-fit: cover;
            width: 100%;
            min-height: 100%;
            transition: all ease 1s;
        }
        &:hover {
            img {
                filter: blur(4px);
            }
            a {
                opacity: 1;
            }
        }
    }
    &>div {
        overflow: hidden;
        position: relative;
        box-shadow: 0 2px 8px 0 rgba(#000, 0.2), 0 3px 20px 0 rgba(#000, 0.19);
    }
    div,
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
    }
}
</style>
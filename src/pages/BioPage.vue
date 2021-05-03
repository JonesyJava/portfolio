<template>
  <div class="container-fluid bg-main">
    <div>
      <div class="row">
        <div class="col-4 text-white pl-5 pt-5 text-left">
          <h5
            class="text-a font-hello"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <b> Hi, my name is </b>
          </h5>

          <h1
            class="text-b font-bio"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <b>Michael Jones</b>
          </h1>
          <br />
          <h2
            class="text-c font-bio"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <b> I build websites and applications.</b>
          </h2>
          <br />
          <h5
            class="text-a font-hello"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            I'm a
            <span class="text-c">Boise-based</span>
            full stack software developer who specializes in building
            <span class="text-c">(and sometimes designing)</span> exceptional
            digital experiences.
          </h5>
        </div>
        <div
          class="col-4 text-center mt-3"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <img class="img-fluid img-style" src="../assets/img/Me2.jpg" alt="" />
        </div>
        <div class="col-4 pr-5 pt-5">
          <h4
            class="text-a font-bio"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Fun Facts:
          </h4>
          <br />
          <h5>
            <ul class="text-c" data-aos="fade-left" data-aos-duration="1000">
              <li>
                Graduated from
                <a href="https://www.purdue.edu/"> Purdue University </a>
                with a B.A. in Forensic Anthropology
              </li>
              <br />
              <li>My identical twin brother is also a software developer</li>
              <br />
              <li>Professional comic-book trader/seller/buyer</li>
              <br />
              <li>
                Die-hard
                <a href="https://www.mlb.com/cubs"> Chicago Cubs </a>
                fan
              </li>
            </ul>
          </h5>
        </div>
      </div>
      <div class="row justify-content-center">
        <div
          class="col-8 font-bio text-c"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h5>
            <b>
              My interest in technology started back in the 1995 when my family
              first brought home our very own computer. Fast-forward to 2017, I
              landed my first IT industry position as a IT Technical Recruiter.
              Turns out living vicariously through software engineers ignited an
              internal flame, so I became a software developer myself!
            </b>
            <br />
            <br />
            <b>
              My main focus these days is building accessible, business-minded
              web applications that provide a creative solutions and digital
              experiences for end-users.
            </b>
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useRoute } from 'vue-router'

AOS.init()
export default {
  name: 'BioPage',
  setup() {
    const route = useRoute()
    return {
      route
    }
  },
  components: {}
}
</script>
<style lang="scss" scoped>
// Hover Effects
// .hover-nav:hover .hover-button {
//   display: block;
//   transition: 1s;
// }
// .hover-button {
//   display: none;
// }
// .hover-nav:hover {
//   cursor: pointer;
// }
// .hover-nav {
//   transition: all 1s;
// }
// Background Color
.bg-main {
  background-color: #000000;
}

img {
  outline: 4px solid #00790e;
  outline-offset: -100px;
  border: 50px solid transparent;
  border-width: 150px 50px 50px 150px;
  margin: -75px 0 0 -75px;
}
.font-bio {
  font-family: "Raleway", sans-serif !important;
}
.font-hello {
  font-family: "Raleway", sans-serif;
  font-family: "Source Serif Pro", serif;
}
.text-a {
  color: #02af17;
}
.text-b {
  color: aliceblue;
}
.text-c {
  color: #b5b5b5;
}
.text-p {
  color: #e4b90c;
}
// .text-cc {
//   color: #1332e1;
// }
a {
  text-decoration: none;
  color: #ffffff;
  position: relative;
}
a:hover::after {
  top: 0%;
}
a::after {
  content: "";
  position: absolute;
  z-index: -1;
  top: 60%;
  left: -0.1em;
  right: -0.1em;
  bottom: 0;
  transition: top 200ms cubic-bezier(0, 0.8, 0.13, 1);
  background-color: rgb(0 207 79 / 50%);
}
</style>

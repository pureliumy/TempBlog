<template>
  <div class="home">
    <h1>
      <router-link tag="a" to="/">
        {{ msg }}
      </router-link>
    </h1>
    <ul>
      <li>
        <router-link to="/blog" tag="a">Blog</router-link>
      </li>
      <li>
        <router-link to="/workshop" tag="a">Workshop</router-link>
      </li>
      <li class="contact" @mouseenter="showContact = true" @mouseleave="showContact = false">
        <a href="#">Contact</a>
        <transition name="fade">
          <div v-show="showContact" class="wrap">
            <p>Phone: 15687889199</p>
            <p>Email:&nbspalephantand#gmail.com</p>
            <p>QQ: 956122045</p>
            <p>
              <a href="http://github.com/pureliumy" target="_blank">Github</a>
            </p>
          </div>
        </transition>
      </li>
      <li>
        <router-link to="/resume" tag="a">Resume</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Liumy',
      showContact: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  height: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  color: #fff;
  letter-spacing: 5px;
}

.home h1 {
  margin-bottom: 100px;
  font-size: 4.5em;
}

.home h1 a,
.contact .wrap a {
  color: #fff;
}

.home a {
  color: rgba(255, 255, 255, .7);
  text-decoration: none;
  transition: .3s;
}

.home a:hover,
li:hover a {
  color: #fff;
  text-shadow: 2px 2px 3px #222;
}

.home .contact {
  position: relative;
}

.home .contact .wrap {
  position: absolute;
  left: 0;
  top: 100%;
  padding: 16px;
  margin-left: -16px;
  background: rgba(0, 0, 0, .2);
  background-clip: padding-box;
  letter-spacing: 2px;
}

.contact .wrap p {
  margin: 8px 0;
  font-size: 16px;
}

ul {
  list-style-type: none;
  padding: 0;
  margin-left: -20px;
}

li {
  display: inline-block;
  margin: 0 20px 15px;
  font-size: 20px;
}

a {
  color: #111;
}

.fade-enter-to,
.fade-leave {
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: .4s;
}
</style>

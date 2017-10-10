<template>
  <div id="app">
    <transition mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
canvas,
caption,
center,
cite,
code,
dd,
del,
dfn,
div,
dl,
dt,
em,
embed,
fieldset,
font,
form,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
i,
iframe,
img,
ins,
kbd,
label,
legend,
li,
menu,
object,
ol,
p,
pre,
q,
s,
samp,
small,
span,
strike,
strong,
sub,
sup,
table,
tbody,
td,
tfoot,
th,
thead,
tr,
tt,
u,
ul,
var {
  margin: 0;
  padding: 0;
  border: 0;
  background: transparent;
}

html {
  font-family: 'Averia Libre', 'Cutive Mono', Arial, Helvetica, sans-serif;
  height: 100%;
  background-color: rgba(5, 5, 40);
}

body {
  background-image: url('./assets/img/index_bg.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  height: 100%;
  margin: 0;
}

#app {
  padding: 20px;
}

.v-enter-to,
.v-leave {
  opacity: 1;
  transform: none;
  
}

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translate3d(0, 5%, 0)
}

.v-enter-active,
.v-leave-active {
  transition: .3s;
}
</style>

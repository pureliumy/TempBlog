<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <a href="/blog">Blog</a>
      </li>
      <li>
        <a href="/workshop">Workshop</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
      <li>
        <a href="/resume">Resume</a>
      </li>
      <br>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Liumy\'s here'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  font-size: 10px;
  font-family: Roboto, Arial, sans-serif;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #111;
}
</style>

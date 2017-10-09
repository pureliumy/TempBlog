<template>
  <div class="home">
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
.home h1{
  font-size: 18px;
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

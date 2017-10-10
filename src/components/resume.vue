<template>
  <div class="resume">
    <h1>
      <router-link tag="a" to="/resume">
        Resume
      </router-link>
    </h1>
    <div class="wrap">
      <ul>
        <li>
          <a href="/resume/index.html">Online browse</a>
        </li>
        <li>
          <a href="/resume/resume.pdf">PDF download</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.resume {
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  color: #fff;
  letter-spacing: 5px;
}

.resume h1 {
  margin-bottom: 100px;
  font-size: 4.5em;
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

.resume h1 a,
.contact .wrap a {
  color: #fff;
}

.resume a {
  color: rgba(255, 255, 255, .7);
  text-decoration: none;
  transition: .3s;
}

.resume a:hover,
li:hover a {
  color: #fff;
  text-shadow: 2px 2px 3px #222;
}
</style>

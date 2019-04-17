<template>
  <header>
    <router-link to="/">
      <img src="../assets/TourDeM.png" alt="" />
    </router-link>
    <!-- <ul>
            <li v-for= "link in links" :key= "link.id"><a href="">{{link}}</a></li>
        </ul> -->

    <ul>
      <li>
        <router-link to="/Event_Info" @click="scroll">Event Info</router-link>
      </li>
      <li><router-link to="/register">Register</router-link></li>
      <li><router-link to="/Gallery">Gallery</router-link></li>
      <li><router-link to="/Contact">Contact</router-link></li>
    </ul>
  </header>
</template>

<script>
export default {
  data() {
    return {
      links: ["Event Info", "Register", "Gallery", "Contact"]
    };
  },
  methods: {
    scroll(event) {
      //   var ele = document.getElementById(event);
      //   window.scrollTo(ele.offsetLeft,ele.offsetTop);

      var target = event.srcElement || event.target;
      if (target.innerHTML == "Event Info") {
        scroll(0, 950);
      } else if (target.innerHTML == "Gallery") {
        scroll(0, 1980);
      } else if (target.innerHTML == "Contact") {
        scroll(0, 9000);
      } else if (target.innerHTML == "Register") {
        target.href = "./register";
      }
    }
  }
};
</script>

<style scoped>
@media only screen and (min-width: 20em) {
  header {
    border-bottom: 1px solid yellowgreen;
    display: flex;
    align-items: center;
  }

  header img {
    width: 41vw;
    height: 20vh;
  }

  header ul {
    display: flex;
    flex-direction: row;
    margin-left: auto;
    padding: 2vw;
  }

  header ul li {
    display: flex;
    justify-content: space-between;
    list-style: none;
  }

  header ul li a,
  header ul a {
    padding: 0.7vw;
    font-size: 0.8em;
    text-decoration: none;
    color: yellowgreen;
  }

  header ul li a:hover,
  header ul a:hover {
    border-bottom: 1px solid rgb(255, 187, 0);
  }
}

@media only screen and (min-width: 45em) {
  /*720px*/

  header ul li a,
  header ul a {
    font-size: 1em;
  }
}
</style>

<template>
  <main>
    <img src="../assets/road.png" alt="" />
    <h1>
      115km and 50km cycle routes up the majestic Hill of Tara and through
      scenic Co. Meath
    </h1>
    <p>
      In association with the Ratoath Wheelers and Ratoath Gaa we bring you Tour
      De Meath, a cycle sportive event for all cyclist or fitness enthusiasts
    </p>
    <button @click="scroll">Event Info</button>
    <hr />
    <div
      id="blocks"
      v-for="block in this.blocks"
      :key="block.id"
      @click="scroll"
    >
      <img :src="block.img" alt="" />
      <a>{{ block.name }}</a>
    </div>
    <div class="Event_Info">
      <h2>Event Info</h2>
      <h3>Date - {{ date }}</h3>
      <img src="../assets/route2.jpg" alt="" />
      <p v-for="point in this.points" :key="point.id">&bull; {{ point }}</p>
    </div>
    <div class="register">
      <button onclick="window.location.href='/register'">REGISTER</button>
    </div>
    <div class="Contact">
      <h2>Send Us A Message</h2>
      <form
        action="https://formspree.io/tourdemeath@gmail.com"
        method="POST"
        v-if="!submitted"
      >
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your Name (Full)"
        />
        <input type="email" name="email" id="email" placeholder="Your Email" />
        <input type="text" name="subject" id="subject" placeholder="Subject" />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Your Message"
        ></textarea>
        <button type="submit" class="submit">Submit</button>
      </form>
      <div class="status" v-if="!submitted"></div>
      <div v-if="submitted">
        <h3>
          Thanks for contacting Tour De Meath, please allow 24-48 hours to deal
          with your query!
        </h3>
      </div>
      <aside>
        <h2>Contact Info</h2>
        <h2>Where To Find Us</h2>
        <p>Ratoath GAA, Ratoath</p>
        <h2>Email Us At :</h2>
        <p>tourdemeath@gmail.com</p>
      </aside>
    </div>
  </main>
</template>

<script>
const $ = require("jquery");
Window.JQuery = require("jquery-confirm");

export default {
  data() {
    return {
      blocks: {
        block1: { name: "Event Info", img: require("../assets/map.jpg") },
        block2: { name: "Contact", img: require("../assets/tara.jpg") },
        block3: {
          name: "Register",
          img: require("../assets/bridge.jpg")
        }
      },
      points: [
        "Registration begins 8am @ Ratoath GAA Club",
        "Start Time 9:30am",
        "Feed Stations will be in place en route",
        "Breakdown assistance and vehicles en route",
        "Food for all cyclists at clubhouse after the event ",
        "Certificates upon completion will be awarded to all",
        "Dressing room and bar facilities available"
      ],
      date: "28th April 2019",
      submitted: false
    };
  },
  methods: {
    scroll(event) {
      var target = event.target || event.srcElement;
      if (target.innerHTML == "Event Info") {
        scroll(0, 950);
      } else if (target.innerHTML == "Contact") {
        scroll(0, 6200);
      } else if (target.innerHTML == "Register") {
        target.href = "./register";
      }
    }
  },
  mounted() {
    $(document).ready(function() {
      $(".submit").click(function(event) {
        var name = $("#name").val();
        var email = $("#email").val();
        var subject = $("#subject").val();
        var message = $("#message").val();
        var status = $(".status");
        status.empty();

        // alert(name , email , subject , message , status);

        if (name.length >= 5) {
          name = this.name;
        } else {
          status.append(
            "Name length isn't  5 letters or above, please check again<br>"
          );
          event.preventDefault();
        }

        if (email.length > 5 && email.includes("@") && email.includes(".")) {
          email = this.email;
        } else {
          status.append(
            "Email is not valid. Must include an '@' and '.' and be over 5 letters, please check again <br>"
          );
          event.preventDefault();
        }

        if (subject.length >= 5) {
          subject = this.subject;
        } else {
          status.append(
            "Subject length isn't  5 letters or above, please check again<br>"
          );
          event.preventDefault();
        }

        if (message.length >= 15) {
          message = this.message;
          this.submitted = true;
        } else {
          status.append(
            "Message length isn't 15 letters or above, please check again<br><br><br>"
          );
          event.preventDefault();
        }
      });
    });
  }
};
</script>

<style scoped>
@media screen and (min-width: 20em) {
  main {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  main img {
    width: 100vw;
  }

  main h1 {
    font-size: 1.4em;
    text-align: center;
    font-family: cursive;
  }

  main p {
    text-align: center;
    font-family: fantasy;
  }

  main button {
    font-size: 0.9em;
    border: none;
    border-radius: 5px;
    background: rgb(255, 187, 0);
    margin-bottom: 4vh;
    color: white;
  }

  main hr {
    color: black;
    width: 100vw;
  }

  main #blocks {
    margin: 3vh 1vw;
    background: rgb(255, 187, 0);
    border-bottom: 1px solid pink;
    max-width: 600px;
    width: 30vw;
    display: flex;
    flex-wrap: wrap;
  }

  main #blocks a {
    margin-top: 1vh;
    color: white;
    width: 30vw;
    font-size: 1.5em;
    text-align: center;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  }

  main #blocks img {
    width: 30vw;
    height: 20vh;
  }

  main .Event_Info {
    margin-top: 6vh;
    margin-bottom: 5vh;
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
  }
  main .Event_Info img {
    width: 45vw;
    margin: 0 auto;
  }

  main .Event_Info h2 {
    width: 100vw;
    text-align: center;
    margin-top: 6vh;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }

  main .Event_Info h3 {
    width: 100vw;
    text-align: center;
    font-family: "Courier New", Courier, monospace;
  }

  main .Event_Info p {
    width: 60vw;
    font-size: 1em;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    margin: 2vh auto;
  }
  main .register {
    display: flex;
    width: 100vw;
    height: 15vh;
    background: yellowgreen;
    margin-bottom: 6vh;
  }

  main .register button {
    margin: 2vh auto;
    padding: 2vh 6vw;
    border: 1px solid white;
    font-size: 2.2em;
  }

  main .Contact {
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
    flex-direction: column;
  }

  main .Contact h2 {
    text-align: center;
    width: 100vw;
    font-family: PT Sans;
  }

  main .Contact form {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }

  main .Contact input {
    width: 50vw;
    margin: 1vh auto;
  }

  main .Contact textarea {
    width: 60vw;
    margin: 1vh auto;
  }

  main .Contact button {
    width: 40vw;
    margin: 1vh auto 4vh auto;
  }

  main .Contact .status {
    text-align: center;
    background: tomato;
    border: 1px solid black;
    border-bottom: 2px solid black;
    color: white;
  }

  main .Contact aside h2 {
    font-size: 1.4em;
    font-family: Caveat;
  }
}

@media only screen and (min-width: 45em) {
  /*720px*/

  main #blocks img {
    height: 29vh;
  }
}

@media only screen and (min-width: 69.75em) {
  main p {
    width: 100vw;
  }

  main .Event_Info {
    margin-bottom: -24vh;
    display: block;
  }
  main .Event_Info img {
    width: 24vw;
    height: 38vh;
    margin: 0 20vw;
  }

  main .Event_Info p {
    margin: 4vh 33vw;
    position: relative;
    top: -36vh;
  }
}
</style>

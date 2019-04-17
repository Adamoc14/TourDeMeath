<template>
  <main>
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
      submitted: false
    };
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

<style>
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
</style>

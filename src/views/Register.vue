<template>
  <div>
    <h1>
      Click the button to register at the link provided below for this event
    </h1>
    <!-- <form action="" v-if="!submitted">
      <label for="">First Name: <input type="text" name="First_Name"/></label>
      <label for="">Surname : <input type="text" name="Surname"/></label>
      <label for="">Address : <input type="text" name="Address"/></label>
      <label for=""
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input
          type="text"
          name="Address_1"
      /></label>
      <label for=""
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input
          type="text"
          name="Address_2"
      /></label>
      <label for="">Email Address : <input type="email" name="Email"/></label>
      <label for=""
        >Phone Number : <input type="tel" name="Phone_Number"
      /></label>
      <label for=""
        >Emergency Contact Name : <input type="text" name="E_Contact_Name"
      /></label>
      <label for=""
        >Emergency Contact Number : <input type="tel" name="E_Contact_Number"
      /></label>
      <label for=""
        >Club Name(Optional) : <input type="text" name="Club_Name"
      /></label>
      <div ref="card"></div>
      <button @click.prevent="handleSubmit" id="submit-form">Submit</button>
    </form>
    <div v-if="submitted" class="submitted">
      <h3>Thanks for registering for the cycle</h3>
      <img
        src="https://dumielauxepices.net/sites/default/files/bike-clipart-marathon-857865-3039859.gif"
        alt=""
      />
    </div> -->
    <img src="../assets/cyclist.png" alt="" id="bike_img" />
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSe3on_bbu-PwGHBZIF89ddp6lLIoe6ENBkDDkF2Xa9xD1X0og/viewform"
    >
      <button id="submit-form">
        Register
      </button>
    </a>
  </div>
</template>

<script src="https://js.stripe.com/v3/"></script>

<script>
const $ = require("jquery");
Window.JQuery = require("jquery-confirm");

export default {
  data() {
    return {
      person: {
        firstName: "",
        lastName: "",
        Address1: "",
        Address2: "",
        Address3: "",
        email: "",
        phoneNumber: "",
        econtactName: "",
        econtactNumber: "",
        clubName: ""
      },
      values: [],
      submitted: false,
      integer: 1
    };
  },
  methods: {
    handleSubmit() {
      var $form = $("form"),
        url =
          "https://script.google.com/macros/s/AKfycbxNZg_hIsjsVNfMEn0sMQMrG-YBKmNZn_adYCuWNk-5GSy1045-/exec";
      var jqxhr = $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: $form.serialize()
      });
      var form = document.querySelector("form");
      form.reset();
      this.submitted = true;
    }
  },

  mounted() {
    let stripe = Stripe(`YOUR_STRIPE_PUBLISHABLE_KEY`),
      elements = stripe.elements(),
      card = undefined;
    card = elements.create("card");
    card.mount(this.$refs.card);
  }
};
</script>

<style scoped>
@media screen and (min-width: 20em) {
  div {
    margin: 8vw 4vh;
  }

  div h1 {
    font-family: dosis;
    display: flex;
    justify-content: center;
    text-align: center;
  }
}

/* div form {
    display: flex;
    flex-direction: column;
    margin: 5vh 0;
  }

  div form input {
    margin: 1vh;
  }

  div form button {
    margin: 5vh;
    background: rgb(255, 187, 0);
    font-family: bitter;
    padding: 0.6vh;
    font-weight: bold;
    color: white;
  }
}

@media screen and (min-width: 45em) {
  div form {
    margin: 2vh 30vh;
  }
  div form input {
    width: 30vw;
  }
}
.submitted {
  display: flex;
  margin: 30vh 20vw;
  height: 35vh;
}

@media screen and (min-width: 20em) {
  .submitted {
    flex-wrap: wrap;
  }
}

.submitted h3 {
  font-family: cursive;
  text-align: center;
} */

@media screen and (min-width: 20em) {
  #submit-form {
    margin: 10vh -5vw;
    width: 90vw;
    background: orange;
    padding: 2.5vh 4vw;
    border: none;
    color: white;
    font-weight: bold;
    font-family: caveat;
    font-size: 20px;
  }

  #bike_img {
    margin: 2vh 8vw;
    width: 60vw;
  }
}

@media screen and (min-width: 45em) {
  #bike_img {
    margin: 2vh 16vw;
    width: 35vw;
  }
  #submit-form {
    margin: -23vh 52vw;
    width: 30vw;
  }
}
</style>

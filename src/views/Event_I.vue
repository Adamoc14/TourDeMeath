<template>
  <main>
    <div class="Event_Info">
      <h2>Event Info</h2>
      <h3>Date - {{ date }}</h3>
      <img src="../assets/route2.jpg" alt="" />
      <p v-for="point in this.points" :key="point.id">&bull; {{ point }}</p>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      points: [
        "Registration begins 8am @ Ratoath GAA Club",
        "Start Time 9:30am",
        "Feed Stations will be in place en route",
        "Breakdown assistance and vehicles en route",
        "Food for all cyclists at clubhouse after the event ",
        "Certificates upon completion will be awarded to all",
        "Dressing room and bar facilities available"
      ],
      date: "28th April 2019"
    };
  }
};
</script>

<style>
@media only screen and (min-width: 20em) {
  main p {
    text-align: center;
    font-family: fantasy;
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
}

@media only screen and (min-width: 69.75em) {
  main p {
    width: 100vw;
  }

  main .Event_Info {
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

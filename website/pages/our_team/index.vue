<template>
  <Head>
    <Title>Our Team - Helping Hands</Title>
  </Head>
  <BreadCrumbs :crumbs="BCrumbs" />
  <div class="top-container">
    <div class="back-button">
      <BackButton />
    </div>
    <div class="center-title">Our team</div>
  </div>
  <div class="introduction">
    At Helping Hands Anti-Violence Center, our team is committed to supporting
    survivors and combating violence against women. With expertise in
    counseling, legal advocacy, and community outreach, we work tirelessly to
    provide compassionate care and empower individuals to reclaim their lives.
    Join us in our mission to create a safer and more supportive environment for
    all.
  </div>

  <div id="sorting-selector-team">
    <label for="order">Sort by:</label>
    <select class="menu" id="order" v-model="order">
      <option value="Role">Role</option>
      <option value="A-Z">A-Z</option>
      <option value="Z-A">Z-A</option>
    </select>
  </div>

  <div id="people-container">
    <PersonOv v-for="person of sorted" :id="person.id" :surname="person.surname" :role="person.role" :link="'/our_team/' + person.id" :image="person.image" testimonial="0" :name="person.name"/>
  </div>
</template>

<script setup>
  import BreadCrumbs from "~/components/BreadCrumbs.vue";

  //Fetch of people
  const { data: people } = await useFetch("/api/our_team");

  //To reorder the people
  const order = ref("Role");
  const roles = ["Head", "Chief", "Administrator", "Employee"];

  //Sort people based on the order selected by the user
  const sorted = computed(() => {
    if (order.value === "Role" || !order.value) {
      return roles.flatMap((role) =>
        people.value.filter((person) => person.role === role)
      );
    } else if (order.value === "A-Z") {
      return [...people.value].sort((a, b) => a.surname.localeCompare(b.surname));
    } else if (order.value === "Z-A") {
      return [...people.value].sort((a, b) => b.surname.localeCompare(a.surname));
    }
  });

  //Search Engine Optimization
  const description = ref("In this page you will find all of our team members.");
  const keywords = ref("Team, Teamwork, People, Members, " + roles.join(", "));

  useHead({
    meta: [
      { name: "description", content: description },
      { name: "keywords", content: keywords },
    ],
  });
</script>

<script>
  export default {
    computed: {
      BCrumbs() {
        return [
          {
            label: "home",
            url: "/",
          },
        ];
      },
    },
  };
</script>

<style scoped>
  #people-container {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    align-self: center;
    gap: 2vw;
    justify-content: center;
    max-width: 90vw;
  }

  #sorting-selector-team {
    display: flex;
    font-family: Jost;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    align-self: center;
    margin: 1%;
    gap: 1vw;
    font-size: 2vh;
    font-weight: 500;
    min-width: 17vw;
    margin-top: 0vw;
  }

  .menu {
    border-radius: 5px;
    border: 1px solid black;
    font-size: 2vh;
    font-family: inherit;
    padding: 0 2vh;
    cursor: pointer;
    width: 60%;
    background-color: rgba(255, 255, 255, 0.9);
    appearance: auto;
  }

  @media screen and (max-width: 850px) {
    #people-container {
      display: flex;
      justify-content: center;
      flex-direction: column;
      flex-wrap: wrap;
      align-self: center;
      gap: 2vw;
      max-width: 90vw;
      margin-top: 3vh;
    }
  }
</style>

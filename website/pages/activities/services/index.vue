<template>
  <Head>
    <Title>Services - Helping Hands</Title>
  </Head>
  <BreadCrumbs :crumbs="BCrumbs" />
  <div class="top-container">
    <div class="back-button">
      <BackButton />
    </div>
    <div class="center-title">Services</div>
  </div>
  <div class="introduction">
    Helping Hands Anti-Violence Center is dedicated to ending violence against
    women. We offer refuge, counseling, legal aid, and emergency housing for
    survivors of domestic violence, sexual assault, and harassment. Through
    community collaboration and advocacy, we raise awareness and promote change.
    Join us in empowering survivors and creating a safer world for every woman.
  </div>

  <div id="sorting-selector-services">
    <label for="orderServ">Sort by:</label>
    <select class="menu" id="orderServ" v-model="orderServ">
      <option value="A-Z">A-Z</option>
      <option value="Z-A">Z-A</option>
    </select>
  </div>
  <div id="services-container">
    <ProjectCard v-for="service of sorted" :id="service.id_service" :title="service.title" :link="'/activities/services/' + service.id_service" :year="null" :small_desc="service.small_desc" :image="service.image"/>
  </div>
</template>

<script setup>
    const { data: services } = await useFetch("/api/services"); // get all services

    const orderServ = ref("A-Z"); // default order

    // sort the services based on the order selected by the user
    const sorted = computed(() => {
        if (!services.value) return []; // handle potential null or undefined value

        const servicesCopy = [...services.value]; // create a copy of the services array

        if (orderServ.value === "A-Z") {
            return servicesCopy.sort((a, b) => a.title.localeCompare(b.title)); // sort alphabetically A-Z
        } else if (orderServ.value === "Z-A") {
            return servicesCopy.sort((a, b) => b.title.localeCompare(a.title)); // sort alphabetically Z-A
        } else {
            return servicesCopy; // return the default order if no match
        }
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
        {
          label: "all activities",
          url: "/activities",
        },
      ];
    },
  },
};
</script>

<style scoped>
    #sorting-selector-services {
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

    #services-container {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    align-self: center;
    gap: 2vw;
    justify-content: center;
    max-width: 90vw;
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
        #services-container {
            display: flex;
            justify-content: center;
            flex-direction: column;
            flex-wrap: wrap;
            align-self: center;
            gap: 2vw;
            max-width: 90vw;
        }
    }
</style>

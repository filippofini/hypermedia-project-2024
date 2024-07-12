<template>
  <Head>
    <Title>Projects - Helping Hands</Title>
  </Head>
  <BreadCrumbs :crumbs="BCrumbs" />
  <div class="top-container">
    <div class="back-button">
      <BackButton />
    </div>
    <div class="center-title">Projects</div>
  </div>
  <div class="introduction">
    Welcome to our Projects Preview Page. Here, you'll find a comprehensive
    overview of our impactful initiatives aimed at supporting women victims of
    violence. From raising awareness through public installations to educating
    young minds in schools, each project is designed to foster a safer, more
    informed, and supportive community. Explore our diverse efforts to combat
    gender-based violence and discover how you can get involved in making a
    difference.
  </div>

  <div id="sorting-selector-projects">
    <label for="orderProj">Sort by:</label>
    <select class="menu" id="orderProj" v-model="orderProj">
      <option value="A-Z">A-Z</option>
      <option value="Z-A">Z-A</option>
      <option value="Newest first">Newest first</option>
      <option value="Oldest first">Oldest first</option>
    </select>
  </div>
  <div id="projects-container">
    <ProjectCard v-for="project of sorted" :id="project.id_project" :title="project.title" :link="'/activities/projects/' + project.id_project" :year="project.year" :small_desc="project.small_desc" :image="project.image"/>
  </div>
</template>

<script setup>
    const { data: projects } = await useFetch("/api/projects"); // get all projects

    const orderProj = ref("A-Z"); // default order

    // sort the projects based on the order selected by the user
    const sorted = computed(() => {
    const projectsCopy = [...projects.value]; // create a copy of the projects array

    if (orderProj.value === "A-Z") {
        return projectsCopy.sort((a, b) => a.title.localeCompare(b.title)); // sort alphabetically A-Z
    } else if (orderProj.value === "Z-A") {
        return projectsCopy.sort((a, b) => b.title.localeCompare(a.title)); // sort alphabetically Z-A
    } else if (orderProj.value === "Newest first") {
        return projectsCopy.sort((a, b) => b.year - a.year); // sort by year, newest first
    } else if (orderProj.value === "Oldest first") {
        return projectsCopy.sort((a, b) => a.year - b.year); // sort by year, oldest first
    } else {
        return projectsCopy; // return the default order if no match
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
    #sorting-selector-projects {
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

    #projects-container {
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
    #projects-container {
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

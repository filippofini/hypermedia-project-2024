<template>
    <div class="top">
        <div class="test">
            <BackButton />
        </div>
        <div class="center-title">
            <div class="title">Projects</div>
        </div>
    </div>
    <div id="sorting-selector-projects">
        <label for="sorting-selector-projects">Sort by:</label>
        <select class="menu" id="orderProj" v-model="orderProj">
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="Newest first">Newest first</option>
            <option value="Oldest first">Oldest first</option>
        </select>
    </div>
    <div id="projects-container">
        <ProjectCard v-for = "project of sorted" :id = "project.id_project" :title  = "project.title" :link = "'/projects/' + project.id" :year = "project.year" :small_desc = "project.small_desc" />
    </div>
</template>

<script setup>
  const { data: projects } = await useFetch('/api/projects') //get all projects

  const orderProj = ref("A-Z") //default order

  //sort the projects based on the order selected by the user
  const sorted = computed(() => {
    const projectsCopy = [...projects.value]; //create a copy of the Projects array

    if (orderProj.value === "A-Z" || orderProj.value === "Z-A" || orderProj.value == null || orderProj.value == "" || orderProj.value == undefined) {
      //alphabetical order or default

      const sortedProjects = (orderProj.value == "A-Z" ? projectsCopy : projectsCopy.reverse()) //reverse the array if the order is Z-A

      return sortedProjects;

    } else if (orderProj.value === "Newest first" || orderProj.value === "Oldest first") {
      //date order

      const sortOrder = orderProj.value === "Oldest first" ? -1 : 1;
      const sortedProjects = projectsCopy.sort((a, b) => (b.year - a.year) * sortOrder);

      return sortedProjects;  
    } else {

      return projectsCopy;
    }
  });
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap');
    
    .top {
        display: flex;
        flex-direction: row;
        margin: 2vw;
    }

    .test{
        display: flex;
        width: 10%;
    }

    .center-title {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 90%;
        margin-right: 10%;
    }

    .title {
        font-family: Jost;
        font-size: 3vw;
        font-weight: 600;
        text-align: center;
        margin-top: 0vw;
        display: flex;  
        align-self: center;  
    }

    #sorting-selector-projects {
        display: flex;
        font-family: Jost;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        align-self: center;
        margin: 1%;
        gap: 10px;
        font-size: 1.8vw;
        font-weight: 500;
        min-width: 20vw;
        margin-top: 4vw;
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
        border: none;
        font-size: 18px;
        font-family: inherit;
        padding: 0 2vh;
        cursor: pointer;
        width: 60%;
        background-color: rgba(255, 255, 255, 0.9);
        appearance: auto;
    }
</style>
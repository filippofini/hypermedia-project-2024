<template>
  <!--TOP OF THE PAGE-->
   <div class="top">
      <div class="test">
        <BackButton />
      </div>
      <div class="center-title">
        <div class = "title">{{project.title}}</div>
      </div>
    </div> 

    <!--PRIMA FASCIA-->
    <div class = "first_band">
      
      <div class="image">
        <img :src="project.image" alt="Project image" style="width:100%">
      </div>

      <div class="titoletti">
        
        <div>Supervisor 
          <NuxtLink :to="'/our_team/' + supervisors[0].id" :arial-label="`link to ${supervisors[0].name} ${supervisors[0].surname} page`" class="info">
            <div class="info">{{supervisors[0].name}} {{supervisors[0].surname}}</div>
          </NuxtLink>
      </div> 
        <div>Team 
          <div v-for="(supervisor, index) in nonSupervisors" :key="index" class="info">
            {{ supervisor.name }} {{ supervisor.surname }}
          </div>
        </div> 
        <div>Year <div class="info">{{project.year}}</div></div> 

      </div>
    </div>

    <!--SECONDA FASCIA-->
    <div class="ovProject">Overview of the project</div>
    <div class = "second_band">
      {{project.description}}
    </div>

    <!--TERZA FASCIA-->
    <div class = "third_band">
      <div>See Also</div>
      <div class = "reccomendation">
        <ProjectCard :description = "project.small_desc" :title="project.title" :id = "project.image"></ProjectCard>
        <ProjectCard :description = "project.small_desc" :title="project.title" :id = "project.image"></ProjectCard>
        <ProjectCard :description = "project.small_desc" :title="project.title" :id = "project.image"></ProjectCard>
      </div>
    </div>

</template>

<script setup>
  
  const route = useRoute();
  const data = await $fetch('/api/projects/' + route.params.id);

  //divido il risultato in lista progetto e lista persone
  const  project = data.Project;
  const  peopleforProject = data.People;

  //console.log("Progetto: " + project);
  //console.log("Persone: " + peopleforProject); 
  const supervisors = peopleforProject.filter(person => person.is_supervisor);
  const nonSupervisors = peopleforProject.filter(person => !person.is_supervisor);
  
  console.log("supervisors: " + supervisors);
  console.log("Team: " + nonSupervisors);
  

  //function to truncate the description
  const truncatedDescription = (description) => {
  if (description.length > 50) {
    return description.slice(0, 50) + '...';
  }
  return description;
  };

</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap');

  .top{
    display: flex;
    flex-direction: row;
    background-color: #FFCDDC;
    padding: 2vw;
  }
  .test{
    display: flex;
    width: 10%;
  }
  .center-title{
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

  .titoletti{
    display: flex;  
    flex-direction: column;
    justify-content: space-evenly;
    font-family: Jost;
    font-size: 1.8vw;
    font-weight: 500;
    text-align: left;
    width: 50%;
  }
  
  .info{
    font-size: 1.8vw;
    font-weight: 300;
    text-align: left;
    color:black;
    text-decoration: none;
  }

  .image{
    width: 50%
  }

  .first_band{
    display: flex;
    flex-direction: row;
    padding: 2vw;
    padding-top: 4vw;
    padding-bottom: 4vw;
    gap:2vw;
    background-color: #FFFFFF;
  }
  .second_band{
    display: flex;
    padding: 2vw;
    padding-top: 1vw;
    font-size: 1.2vw;
    font-weight: 300;
    text-align: left;
    font-family: Jost;
    background-color: #FFCDDC;
  }
  .ovProject{
    display: flex;
    padding: 2vw;
    padding-bottom: 0vw;
    font-size: 1.8vw;
    font-weight: 500;
    text-align: left;
    font-family: Jost;
    background-color: #FFCDDC;
  }

  .third_band{
    display: flex;
    flex-direction: column;
    padding: 2vw;
    gap:2vw;
    font-size: 1.8vw;
    font-weight: 500;
    text-align: center;
    font-family: Jost;
  }

  .reccomendation{
    display: flex;
    flex-direction: row;
    gap: 10vw;
    align-content: center;
    align-self: center;
  }

</style>
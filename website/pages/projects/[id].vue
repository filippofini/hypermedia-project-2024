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
    <!--previous and next link-->
    <div class="prevnext">
      <NuxtLink :to="'/projects/' + previouslink" :arial-label="`link to previous project`" class="link">Previous</NuxtLink>
      <NuxtLink :to="'/projects/' + nextlink" :arial-label="`link to next project`" class="link">Next</NuxtLink>
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
        <ProjectCard 
            :small_desc = "findProjectById(suggestedProject1).small_desc" 
            :title="findProjectById(suggestedProject1).title" 
            :id = "suggestedProject1" 
            :link = "'/projects/' + suggestedProject1" 
            :year = "findProjectById(suggestedProject1).year">
        </ProjectCard>
        <ProjectCard 
            :small_desc = "findProjectById(suggestedProject2).small_desc" 
            :title="findProjectById(suggestedProject2).title" 
            :id = "suggestedProject2" :link = "'/projects/' + suggestedProject2" 
            :year = "findProjectById(suggestedProject2).year">
        </ProjectCard>
        <ProjectCard 
            :small_desc = "findProjectById(suggestedProject3).small_desc" 
            :title="findProjectById(suggestedProject3).title" 
            :id = "suggestedProject3" :link = "'/projects/' + suggestedProject3" 
            :year = "findProjectById(suggestedProject3).year">
        </ProjectCard>
      </div>
    </div>

</template>

<script setup>
  
  //fetch per il progetto specifico
  const route = useRoute();
  const data = await $fetch('/api/projects/' + route.params.id);

  //fetch per il numero di progetti
  const { data: projects } = await useFetch('/api/projects')

  //divido il risultato in lista progetto e lista persone
  const  project = data.Project;
  const  peopleforProject = data.People;

  const supervisors = peopleforProject.filter(person => person.is_supervisor);
  const nonSupervisors = peopleforProject.filter(person => !person.is_supervisor);
  
  //NUMERO DEI PROGETTI
  const projectCount = Object.keys([...projects.value]).length;

  //link to the next and previous project
  const nextlink = project.id_project + 1 > projectCount ? 1 : project.id_project + 1;
  const previouslink = project.id_project - 1 < 1 ? projectCount : project.id_project - 1;
 
  //function to get a random id of the project
  function getRandomIntExcluding(max, num1, num2, num3) {
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * max) + 1;
    } while (randomNumber === num1 || randomNumber === num2 || randomNumber === num3);
    
    return randomNumber;
}

  //link to suggested projects
  const suggestedProject1 = getRandomIntExcluding(projectCount, project.id_project, 0, 0);
  const suggestedProject2 = getRandomIntExcluding(projectCount, project.id_project, suggestedProject1, 0);
  const suggestedProject3 = getRandomIntExcluding(projectCount, project.id_project, suggestedProject1, suggestedProject2);
  
  const progettiLista = [...projects.value];
  
  //function to find the project by id
  function findProjectById(id) {
      return progettiLista.find(p => p.id_project === id);
  }

</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap');

  /*STILE INTESTAZIONE*/
  .top{
    display: flex;
    flex-direction: row;
    background-color: #FFCDDC;
    padding: 2vw;
    margin: 0vw;
    border: 0vw;
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

  .prevnext{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2vw;
    background-color: #FFCDDC;
    border: 0vw;
  }

  .link{
    font-size: 1.2vw;
    font-weight: 300;
    text-align: left;
    color:black;
    text-decoration: none;
  }

  /*STILE PRIMA FASCIA*/
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

  /*STILE SECONDA FASCIA*/
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

  /*STILE TERZA FASCIA*/
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
    gap: 5vw;
    align-content: center;
    align-self: center;
  }

</style>
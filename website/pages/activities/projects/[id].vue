<template>
  <Head>
    <Title>{{ project.title }} - Helping Hands</Title>
  </Head>
  <div>
    <BreadCrumbs :crumbs="BCrumbs" />
    <div class="top-container">
      <div class="back-button">
        <BackButton />
      </div>
      <div class="center-title">{{ project.title }}</div>
    </div>

    <div class="prev-next">
      <NuxtLink :to="'/activities/projects/' + previousLink" aria-label="link to previous project" class="link">Previous</NuxtLink>
      <NuxtLink :to="'/activities/projects/' + nextLink" aria-label="link to next project" class="link">Next</NuxtLink>
    </div>
  </div>

  <div class="first-band">
    <div class="image">
      <img :src="project.image" alt="Project image" style="width: 100%" />
    </div>
    <div class="titles">
      <div>
        Supervisor
        <NuxtLink :to="'/our_team/' + supervisors[0].id" :aria-label="`link to ${supervisors[0].name} ${supervisors[0].surname} page`" class="info">
          <div class="info-link">{{ supervisors[0].name }} {{ supervisors[0].surname }}</div>
        </NuxtLink>
      </div>
      <div class="spacing-title">
        Team
        <div v-for="(supervisor, index) in nonSupervisors" :key="index" class="info">
          {{ supervisor.name }} {{ supervisor.surname }}
        </div>
      </div>
      <div class="spacing-title">
        Start Date
        <div class="info">{{ project.year }}</div>
      </div>
    </div>
  </div>

  <div class="title-page-1-5">Overview of the project</div>
  <div class="second-band">{{ project.description }}</div>

  <div class="third-band">
    <div class="title-page-1-5">See Also</div>
    <div class="recommendation">
      <ProjectCard v-for="id in suggestedProjects" :key="id" :small_desc="findProjectById(id).small_desc" :title="findProjectById(id).title" :id="id" :link="'/activities/projects/' + id" :year="findProjectById(id).year" :image="findProjectById(id).image" />
    </div>
  </div>
</template>

<script setup>
  // Fetch the specific project
  const route = useRoute();
  const projectId = route.params.id;
  const { data: projectData } = await useFetch("/api/projects/" + projectId);
  const project = ref(projectData.value.Project);
  const peopleForProject = ref(projectData.value.Project.People);

  // Fetch all projects
  const { data: allProjects } = await useFetch('/api/projects');
  const projects = ref(allProjects.value);

  // Compute supervisors and non-supervisors
  const supervisors = computed(() => peopleForProject.value.filter(person => person.is_supervisor));
  const nonSupervisors = computed(() => peopleForProject.value.filter(person => !person.is_supervisor));

  // Compute previous and next links
  const projectCount = computed(() => projects.value.length);
  const nextLink = computed(() => (project.value.id_project + 1 > projectCount.value ? 1 : project.value.id_project + 1));
  const previousLink = computed(() => (project.value.id_project - 1 < 1 ? projectCount.value : project.value.id_project - 1));

  // Generate suggested projects
  const suggestedProjects = ref([]);
  const suggestedProjectsLoaded = ref(false);

  async function fetchSuggestedProjects() {
    try {
      const suggestions = [];
      for (let i = 0; i < 3; i++) {
        suggestions.push(getRandomIntExcluding(projectCount.value, project.value.id_project, ...suggestions));
      }
      suggestedProjects.value = suggestions;
      suggestedProjectsLoaded.value = true;
    } catch (error) {
      console.error('Error fetching suggested projects:', error);
      // Handle error if needed
    }
  }

  // Fetch suggested projects on component mount
  onMounted(fetchSuggestedProjects);

  // Function to find project by id
  function findProjectById(id) {
    return projects.value.find(p => p.id_project === id);
  }

  // Utility function to get random integer excluding certain values
  function getRandomIntExcluding(max, ...excluded) {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * max) + 1;
    } while (excluded.includes(randomNumber));
    return randomNumber;
  }
</script>

<script>
  export default {
    computed: {
      BCrumbs() {
        return [
          { label: "home", url: "/" },
          { label: "all activities", url: "/activities" },
          { label: "all projects", url: "/activities/projects" },
        ];
      },
    },
  };
</script>

<style scoped>

.link {
    font-size: 1.3vw;
    font-weight: 300;
    text-align: left;
    color: #B6244F;
    text-decoration: underline;
  }

  .link:hover {
    text-decoration: none;
  }

  .first-band, .third-band {
    display: flex;
    padding: 5.5vw;
    gap: 2vw;
  }

  .first-band {
    flex-direction: row;
    background-color: #ffffff;
  }

  .titles {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: Jost;
    font-size: 2vw;
    font-weight: 500;
    text-align: left;
    width: 50%;
  }

  .info {
    font-size: 1.8vw;
    font-weight: 100;
    text-align: left;
    color: black;
    text-decoration: none;
  }

  .info-link {
  font-size: 2vw;
  font-weight: 100;
  color: #B6244F;
  text-decoration: underline;
  }
  .info-link:hover {
    text-decoration: none;
  }

  .image {
    width: 50%;
  }

  .second-band {
    font-size: 2.3vh;
    font-weight: 300;
    font-family: Jost;
    background-color: #A78BCA;
    display: flex;
    padding-left: 5.5vw;
    padding-right: 5.5vw;
    padding-top: 2vw;
    padding-bottom: 2vw;
    gap: 2vw;
    margin-top: 1vw;
  }

  

  .third-band {
    flex-direction: column;
    text-align: center;
    font-family: Jost;
  }

  .recommendation {
    display: flex;
    flex-direction: row;
    gap: 2vw;
    align-content: center;
    align-self: center;
  } 

  @media screen and (max-width: 850px) {
    .first-band {
      flex-direction: column;
      align-items: center;
      padding: 0;
      margin-bottom: 3vh;
    }
    .titles {
      text-align: center;
      font-size: 2.6vh;
    }

    .info {
      text-align: center;
      font-size: 2.4vh;
    }
    .second-band, .ovProject {
      text-align: center;
    }
    .recommendation {
      flex-direction: column;
      align-self: center;
      max-width: 90vw;
    }

    .info-link {
      font-size: 2.6vh;
    }
    .link {
      font-size: 2.3vh;
    }

    .center-title {
      max-width: 75%;
    }
    .image{
      width: 80%;
    }

    .spacing-title {
      margin-top: 1.3vh;
    }
  }
</style>

<template>
  <Head>
    <Title>{{ service.title }} - Helping Hands</Title>
  </Head>
  <!-- TOP OF THE PAGE -->
  <div>
    <BreadCrumbs :crumbs="BCrumbs" />
    <div class="top-container">
      <div class="back-button">
        <BackButton />
      </div>
      <div class="center-title">{{ service.title }}</div>
    </div>
    <!-- Previous and next link -->
    <div class="prev-next">
      <NuxtLink :to="'/activities/services/' + previousLink" :aria-label="'link to previous service'" class="link">Previous</NuxtLink>
      <NuxtLink :to="'/activities/services/' + nextLink" :aria-label="'link to next service'" class="link">Next</NuxtLink>
    </div>
  </div>

  <!-- First band -->
  <div class="first-band">
    <div class="image">
      <img :src="service.image" alt="Service image" style="width: 100%" />
    </div>
    <div class="titles">
      <div class="t1">
        <div>
          Supervisor
          <NuxtLink :to="'/our_team/' + supervisors[0].id" :aria-label="`link to ${supervisors[0].name} ${supervisors[0].surname} page`" class="info">
            <div class="info-link">{{ supervisors[0].name }} {{ supervisors[0].surname }}</div>
          </NuxtLink>
        </div>
        
          <div class="spacing-title">
            Team
            <div v-for="(member, index) in nonSupervisors" :key="index" class="info">
              {{ member.name }} {{ member.surname }}
            </div>
          </div>
          <div>
          <div class="spacing-title">
                Service schedule:
                <div class="info">
                  {{ service.schedule }}
                </div>
              
            </div>
              
          </div>
        </div>
        <div class="spacing-title-2">
              Want to join? Get in contact:
              <div class="buttn">
              <ButtonViolet link='/contact_us' name_button="Contact us"></ButtonViolet>
            </div>            
        </div>    
    </div>
  </div>

  <!-- Second band -->
  <div class="title-page-1-5">Overview of the service</div>
  <div class="second-band">
    {{ service.description }}
  </div>

  <!-- Testimonials band -->
  <div class="third-band">
    <div class="title-page-1-5">Our Testimonials</div>
    <div class="testimonials">
      <PersonOv v-for="test in testimonials" :key="test.id" :name="test.quote" :role="test.name" :image="test.image" :testimonial="1" />
    </div>
  </div>

  <!-- Third band -->
  <div class="third-band">
    <div class="title-page-1-5">See Also</div>
    <div class="reccomendation">
      <ProjectCard v-for="serviceId in suggestedServices" :key="serviceId" :small_desc="findServiceById(serviceId).small_desc" :title="findServiceById(serviceId).title" :id="serviceId" :link="'/activities/services/' + serviceId" :image="findServiceById(serviceId).image" />
    </div>
  </div>
</template>

<script setup>
  // Fetch the specific service
  const route = useRoute();
  const serviceId = route.params.id;
  const { data: serviceData } = await useFetch("/api/services/" + serviceId);
  const service = ref(serviceData.value.Service);
  const peopleForService = ref(serviceData.value.Service.People);

  // Fetch all services
  const { data: allServices } = await useFetch('/api/services');
  const services = ref(allServices.value);

  // Fetch testimonials for the service
  const { data: allTestimonials } = await useFetch('/api/testimonials');
  const testimonials = computed(() => {
    return allTestimonials.value.filter(test => test.id_service === service.value.id_service);
  });

  // Compute supervisors and non-supervisors
  const supervisors = computed(() => peopleForService.value.filter(person => person.is_supervisor));
  const nonSupervisors = computed(() => peopleForService.value.filter(person => !person.is_supervisor));

  // Compute previous and next links
  const serviceCount = computed(() => services.value.length);
  const nextLink = computed(() => (service.value.id_service + 1 > serviceCount.value ? 1 : service.value.id_service + 1));
  const previousLink = computed(() => (service.value.id_service - 1 < 1 ? serviceCount.value : service.value.id_service - 1));

  // Generate suggested services
  const suggestedServices = ref([]);
  const suggestedServicesLoaded = ref(false);

  async function fetchSuggestedServices() {
    try {
      const suggestions = [];
      for (let i = 0; i < 3; i++) {
        suggestions.push(getRandomIntExcluding(serviceCount.value, service.value.id_service, ...suggestions));
      }
      suggestedServices.value = suggestions;
      suggestedServicesLoaded.value = true;
    } catch (error) {
      console.error('Error fetching suggested services:', error);
      // Handle error if needed
    }
  }

  // Fetch suggested services on component mount
  onMounted(fetchSuggestedServices);

  // Function to find service by id
  function findServiceById(id) {
    return services.value.find(p => p.id_service === id);
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
          { label: "all services", url: "/activities/services" },
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

.buttn{
  margin-top: 3vh;
  display: flex;
  justify-content: center;
  
}

.link:hover {
  text-decoration: none;
}

.titles {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: Jost;
  font-size: 2vw;
  font-weight: 500;
  text-align: left;
  width: 50%;
}

.t1 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

.first-band {
  display: flex;
  flex-direction: row;
  padding: 5.5vw;
  padding-top: 4vw;
  padding-bottom: 4vw;
  gap: 2vw;
  background-color: #ffffff;
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
  display: flex;
  flex-direction: column;
  padding-top: 5.5vw;
  gap: 2vw;
  font-weight: 500;
  text-align: center;
  font-family: Jost;
}

.reccomendation {
  display: flex;
  flex-direction: row;
  gap: 2vw;
  align-content: center;
  align-self: center;
}

.testimonials {
  display: flex;
  flex-direction: row;
  gap: 10vw;
  align-content: center;
  align-self: center;
}


@media screen and (max-width: 850px) {
  .first-band {
    flex-direction: column;
    align-items: center;
    margin: 2% 0;
    padding: 0;
    margin-bottom: 3vh;
  }

  .titles {
    text-align: center;
    font-size: 2.6vh;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .info {
    text-align: center;
    font-size: 2.4vh;
    flex-direction: column;
    justify-content: space-evenly;
    }

  .buttn{
    margin-top: 1vh;

  }
  
  .info-link{
    font-size: 2.6vh;
  }

  .second-band {
    text-align: center;
  }

  .ovService {
    text-align: center;
    justify-content: center;
    font-size: 2.6vh;
  }

  .testimonials, .reccomendation {
    flex-direction: column;
    gap: 2vw;
    max-width: 90vw;
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
  .spacing-title, .spacing-title-2 {
    margin-top: 1.3vh;
  }
}
</style>
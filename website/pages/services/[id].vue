<template>
    <!--TOP OF THE PAGE-->
     <div class="top">
        <div class="test">
          <BackButton />
        </div>
        <div class="center-title">
          <div class = "title">{{service.title}}</div>
        </div>
      </div> 
      <!--previous and next link-->
      <div class="prevnext">
        <NuxtLink :to="'/services/' + previouslink" :arial-label="`link to previous service`" class="link">Previous</NuxtLink>
        <NuxtLink :to="'/services/' + nextlink" :arial-label="`link to next service`" class="link">Next</NuxtLink>
      </div>
  
      <!--PRIMA FASCIA-->
      <div class = "first_band">
        
        <div class="image">
          <img :src="service.image" alt="Service image" style="width:100%">
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
  
        </div>
      </div>
  
      <!--SECONDA FASCIA-->
      <div class="ovService">Overview of the service</div>
      <div class = "second_band">
        {{service.description}}
      </div>

      <!--FASCIA TESTIMONIALS-->
      <div class = "third_band">
        <div>Our Testimonials</div>
        <div class = "testimonials">
          <PersonOv v-for = "test of testimonials_final" :name="test.quote" :role="test.name" :link="test.image" ></PersonOv>
        </div>
      </div>
  
      <!--TERZA FASCIA-->
      <div class = "third_band">
        <div>See Also</div>
        <div class = "reccomendation">
          <ServiceCard 
              :small_desc = "findServiceById(suggestedService1).small_desc" 
              :title="findServiceById(suggestedService1).title" 
              :id = "suggestedService1" 
              :link = "'/services/' + suggestedService1" >
          </ServiceCard>
          <ServiceCard 
              :small_desc = "findServiceById(suggestedService2).small_desc" 
              :title="findServiceById(suggestedService2).title" 
              :id = "suggestedService2" :link = "'/services/' + suggestedService2" >
          </ServiceCard>
          <ServiceCard 
              :small_desc = "findServiceById(suggestedService3).small_desc" 
              :title="findServiceById(suggestedService3).title" 
              :id = "suggestedService3" :link = "'/services/' + suggestedService3" >
          </ServiceCard>
        </div>
      </div>
      
  
  </template>
  
  <script setup>
    
    //fetch per il servizio specifico
    const route = useRoute();
    const data = await $fetch('/api/services/' + route.params.id);
  
    //fetch per il numero di servizi
    const { data: services } = await useFetch('/api/services')
  
    //divido il risultato in lista servizio e lista persone
    const  service = data.Service;
    const  peopleforService = data.People;
  
    const supervisors = peopleforService.filter(person => person.is_supervisor);
    const nonSupervisors = peopleforService.filter(person => !person.is_supervisor);
    
    //NUMERO DEI SERVIZI
    const serviceCount = Object.keys([...services.value]).length;
  
    //link to the next and previous service
    const nextlink = service.service + 1 > serviceCount ? 1 : service.id_service + 1;
    const previouslink = service.id_service - 1 < 1 ? serviceCount : service.id_service - 1;
    
    //function to get a random id of the service
    function getRandomIntExcluding(max, num1, num2, num3) {
      let randomNumber;
      do {
          randomNumber = Math.floor(Math.random() * max) + 1;
      } while (randomNumber === num1 || randomNumber === num2 || randomNumber === num3);
      
      return randomNumber;
  }
  
  //link to suggested services
  const suggestedService1 = getRandomIntExcluding(serviceCount, service.id_service, 0, 0);
  const suggestedService2 = getRandomIntExcluding(serviceCount, service.id_service, suggestedService1, 0);
  const suggestedService3 = getRandomIntExcluding(serviceCount, service.id_service, suggestedService1, suggestedService2);
  
  const progettiLista = [...services.value];
  
  //function to find the service by id
  function findServiceById(id) {
      return progettiLista.find(p => p.id_service === id);
  }

  //fetch per i testimoni
  const {data: testimonials} = await useFetch('/api/testimonials/');

  const testimonials_final = computed(() => {

    var listTestimonial =[];
    
    for(let test of testimonials.value){
      if(test.id_service == service.id_service){
        listTestimonial.push(test);
      }
    }

    return listTestimonial;
  });
  
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
    .ovService{
      display: flex;
      padding: 2vw;
      padding-bottom: 0vw;
      font-size: 1.8vw;
      font-weight: 500;
      text-align: left;
      font-family: Jost;
      background-color: #FFCDDC;
    }
  
    /*STILE TERZA FASCIA E FASCIA TESTIMONIALS*/
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

    .testimonials{
      display: flex;
      flex-direction: row;
      gap: 10vw;
      align-content: center;
      align-self: center;

    }
  
  </style>
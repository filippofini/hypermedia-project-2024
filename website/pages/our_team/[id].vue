<template>
     
      <BreadCrumbs :crumbs="BCrumbs"/>
      <div class="top-container">
        <div class="back-button">
          <BackButton />
        </div>
      </div>
                <!--previous and next link-->
      <div class="prevnext">
          <NuxtLink :to="'/our_team/' + previousLink" :arial-label="`link to previous team member`" class="link">Previous</NuxtLink>
          <NuxtLink :to="'/our_team/' + nextLink" :arial-label="`link to next team member`" class="link">Next</NuxtLink>
      </div>

      <div class = "person-container">
          <img :src="person.image" class="image" alt="Person image">
          <div class="person-title">
              <div class="person-name-surname">{{ person.name }} {{ person.surname }}</div> 
              <div class="person-info"> 
                  <div class="person-role">Role: {{ person.role }}</div>
                  <div class="person-email">Email: {{ person.email }}</div>
                  <div class="person-phone">Phone number: {{ person.phone_number }}</div>
                  <div class="person-cv">{{ person.cv }}</div>
              </div>  
          </div>
      </div>

      <div class="carousel-container">
        <NetflixCarousel :id = "route.params.id" act = "0" class="projects-carousel"></NetflixCarousel>
        <NetflixCarousel :id = "route.params.id" act = "1" class="services-carousel"></NetflixCarousel>
      </div>
</template>

<script setup>
  const route = useRoute();
  const person = await $fetch('/api/our_team/' + route.params.id);
  const {data: peopleCount} = await useFetch('/api/peopleCount');

  const nextLink = person.id + 1 > peopleCount.value ? 1 : person.id + 1;
  const previousLink = person.id - 1 < 1 ? peopleCount.value : person.id - 1;
</script>

<script>
export default {
  computed: {
    BCrumbs() {                
      return [{
        label: 'home',
        url: '/',
      },

      {
        label: 'our team',
        url: '/our_team',
      }];
    }
  }
}
</script>

<style scoped>

  .prevnext{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 2vw;
    padding-right: 2vw;
    margin-top: 50px;

  }

  .person-title{
    align-self: start;
    display: flex;  
    flex-direction: column;
    justify-content: space-evenly;
    font-family: Jost;
    font-size: 1.8vw;
    font-weight: 300;
    text-align: left;
    height: 100%;
  }

  .person-info{
    padding-top: 3vw;
  }

  .image{
    border-radius: 50vw;
    width: 37%;
  }

.person-container{
    display: flex;
    flex-direction: row;
    padding: 5.5vw;
    padding-top: 4vw;
    padding-bottom: 4vw;
    gap: 10vw;
    justify-content: center;
    padding-right: 20vw;
}

.person-name-surname{
    font-size: 4vw;
    font-weight: 1000;
}

.carousel-container{
  justify-content: center;
}

.link{
    font-family: Jost;
    font-size: 1.2vw;
    font-weight: 300;
    text-align: left;
    color:black;
    text-decoration: underline;
  }
.link:hover{
    text-decoration: none;
  }

</style>